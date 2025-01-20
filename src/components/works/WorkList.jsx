export default function WorkList() {
  const expand = (e) => {
    const data = e.target.getBoundingClientRect();
    document.body.style.overflow = "hidden";
    e.target.style.transform = `translateX(-${data.x}px)
      translateY(-${data.y + 10}px)`;
    e.target.classList.remove("card_closed");
    e.target.classList.add("card_open");
  }

  return (
    <ul className="work__list">
      <li className="card card_closed" onClick={expand}>
        <h3 className="title title_work">Работа 1</h3>
      </li>
      <li className="card card_closed" onClick={expand}>
        <h3 className="title title_work">Работа 2</h3>
      </li>
      <li className="card card_closed" onClick={expand}>
        <h3 className="title title_work">Работа 3</h3>
      </li>
    </ul>
  )
}