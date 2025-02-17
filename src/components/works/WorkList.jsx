import { useEffect, useRef } from "react";

export default function WorkList({ data, openCard }) {
  const cardRef = useRef();

  const expand = (e) => {
    let el = e.target;
    if (e.target.classList.contains("title_work")) {
      el = e.target.parentElement;
    };
    el.style.transform = "translateX(-50%) translateY(-50%)";
    cardRef.current = el;
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      el.classList.remove("card_closed");
      el.classList.add("card_open");
    }, 300);
    openCard(el);
  }

  useEffect(() => {
    setHeight();
    let timeout;
    const handleResize = () => {
      setHeight();
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

  const setHeight = () => {
    try {
      const size = document.body.getBoundingClientRect();
      document.documentElement.style.setProperty("--height", `${size.height}px`);
    } catch (error) {
      document.documentElement.style.setProperty("--height", `200vh`);
    }
  }

  return (
    <ul className="work__list">
      {data.map((item) => 
      <li className="card__wrapper" key={item.id}>
        <div 
          className={`card card_closed ${item.dark ? "dark" : "light"}`}
          onClick={expand} 
          id={item.id}
          style={{
            backgroundImage: `image-set(
              url(${item.thumbnail.webp}) type("image/webp"), 
              url(${item.thumbnail.png}) type("image/png"))`,
            backgroundColor: `${item.color}`,
            animation: `jump ${0.3 * (data.indexOf(item) + 1)}s ease-in-out`
          }}>
          <h3 className="title title_work" style={{animation: "none"}}>{item.title}</h3>
        </div>
      </li>)}
    </ul>
  )
}