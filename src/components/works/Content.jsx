import { useEffect, useRef } from "react"

export default function Content({ close }) {
  const contentWindow = useRef();

  useEffect(() => {
    contentWindow.current.classList.add("content_visible");
  }, []);

  const handleClose = () => {
    contentWindow.current.classList.remove("content_visible");
    close();
  }

  return (
    <div className="content" ref={contentWindow}>
      <button className="btn btn_content" onClick={handleClose}>Закрыть</button>
      <p>Content</p>
    </div>
  )
}
