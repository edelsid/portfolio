import { useEffect, useRef, useState } from "react"
import Links from "./Links";
import Tech from "./Tech";
import Slide from "./Slide";

export default function Content({ content, closeCard, error }) {
  const [ paragraphs, setParagraphs ] = useState([]);
  const [ active, setActive ] = useState(0);
  const contentWindow = useRef();
  const sliderWindow = useRef();
  const insideSpace = useRef();

  let  title, text, links, stack, screenshots, dark;
  try {
    ({ title, text, links, stack, screenshots, dark } = content); 
  } catch (error) {
    return;
  }

  useEffect(() => {
    const parsedTest = text.replaceAll("&nbsp;", "\u00A0");
    setParagraphs(parsedTest.split("\n"));
    const timer = setInterval(() => {
      setActive((prevState) => {return prevState + 1});
    }, 6000);
    setTimeout(() => {
      calculateHeight();
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

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        calculateHeight();
      }, 300);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateHeight = () => {
    try {
      const windowHeight = window.innerHeight;
      const style = window.getComputedStyle(contentWindow.current);
      const padding = parseInt(style.getPropertyValue('padding'));
      const newHeight = insideSpace.current.clientHeight + (2 * padding) + 90;
      const finalHeight = newHeight > windowHeight ? newHeight : windowHeight;
      sliderWindow.current.style.setProperty("height", `${finalHeight}px`);
    } catch (error) {
      return;
    }
  }

  return (
    <div 
      className={`content__wrapper ${dark ? "dark" : "light"}`}
      style={error ? {backgroundColor: "lightgrey"} : {}} 
      ref={contentWindow}>
      <ul className="content__slider" ref={sliderWindow}>
        {screenshots.map((item) => 
          <Slide 
            img={item} 
            id={screenshots.indexOf(item)}
            key={screenshots.indexOf(item)}
            active={active}
          />)}
      </ul>
      <button className="btn btn_content" onClick={handleClose}>&#10006;</button>
      <div className="content" ref={insideSpace}>
        <div className="content__main">
          <div className="content__text">
            <h2 className="title title_content">{title}</h2>
            <div className="content__desc">
              {paragraphs.map((item) => <p key={Math.random()}>{item}</p>)}
            </div>
          </div>
          {!error ? <Tech stack={stack}/> : <></>}
          <Links links={links}/>
        </div>
      </div>
    </div>
  )
}
