import { useEffect, useRef } from "react";

export default function WorkList({ data, openCard }) {
  const cardRef = useRef();

  const expand = (e) => {
    e.target.style.transform = "translateX(-50%) translateY(-50%)";
    cardRef.current = e.target;
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      e.target.classList.remove("card_closed");
      e.target.classList.add("card_open");
      
    }, 300);
    openCard(e.target);
  }

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!cardRef.current) return;
        if (cardRef.current.classList.contains("card_closed")) return;
        cardRef.current.style.transform = "translateX(-50%) translateY(-50%)";
      }, 300);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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