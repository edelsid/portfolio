import { useEffect, useRef } from "react"

export default function Content({ content, closeCard }) {
  const contentWindow = useRef();
  const { title, text, repo, link, deploy, screenshots, stack } = content;

  useEffect(() => {
    setTimeout(() => {
      contentWindow.current.classList.add("content_visible");
    }, 300);
  }, []);

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
            <h2 className="content__title">{content.title}</h2>
            <p className="content__desc">{content.text}</p>
          </div>
          <ul className="content__screenshots">
            {screenshots.map((item) => <img className="screenshot" src={item}/>)}
          </ul>
        </div>
        <ul className="content__stack">
          {stack.map((item) => <p>{item}</p>)}
        </ul>
      </div>
    </div>
  )
}
