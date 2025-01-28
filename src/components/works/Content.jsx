import { useEffect, useRef, useState } from "react"
import Links from "./Links";
import Tech from "./Tech";
import Slide from "./Slide";

export default function Content({ content, closeCard }) {
  const { title, text, links, stack, screenshots } = content;
  const [ active, setActive ] = useState(0);
  const contentWindow = useRef();
  const sliderWindow = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prevState) => {return prevState + 1});
      console.log(active)
    }, 6000);
    setTimeout(() => {
      contentWindow.current.classList.add("content_visible");
    }, 300);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (active === screenshots.length) {
      setActive(0)
    }
  }, [active]);

  const handleClose = () => {
    contentWindow.current.classList.remove("content_visible");
    closeCard();
  }

  return (
    <div className="content__wrapper" ref={contentWindow}>
      <button className="btn btn_content" onClick={handleClose}>&#10006;</button>
      <div className="content">
        <div className="content__main">
          <div className="content__text">
            <h2 className="title title_content">{title}</h2>
            <p className="content__desc">{text}</p>
          </div>
          <Tech stack={stack}/>
          <Links links={links}/>
        </div>
        <ul className="content__slider" ref={sliderWindow}>
          {screenshots.map((item) => 
            <Slide 
              img={item} 
              id={screenshots.indexOf(item)}
              key={screenshots.indexOf(item)}
              active={active}
            />)}
        </ul>
      </div>
    </div>
  )
}
