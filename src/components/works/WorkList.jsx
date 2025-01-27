export default function WorkList({ data, openCard }) {
  const expand = (e) => {
    const data = e.target.getBoundingClientRect();
    document.body.style.overflow = "hidden";
    e.target.style.transform = `translateX(-${data.x + 10}px)
      translateY(-${data.y + 10}px)`;
    setTimeout(() => {
      e.target.classList.remove("card_closed");
      e.target.classList.add("card_open");
    }, 300);
    openCard(e.target);
  }

  return (
    <ul className="work__list">
      {data.map((item) => 
      <li className="card__wrapper" key={item.id}>
        <div 
          className="card card_closed" 
          onClick={expand} 
          id={item.id}
          style={{
            backgroundImage: `url(${item.thumbnail})`, 
            backgroundColor: `${item.color}`
          }}>
          <h3 className="title title_work">{item.title}</h3>
        </div>
      </li>)}
    </ul>
  )
}