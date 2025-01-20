import { useEffect, useRef } from "react"

export default function Content({ close }) {
  const contentWindow = useRef();

  useEffect(() => {
    contentWindow.current.style.opacity = "1";
  }, []);

  const handleClose = () => {
    contentWindow.current.style.opacity = "0";
    close();
  }

  return (
    <div className="content" ref={contentWindow}>
      <button className="btn" onClick={handleClose}>Закрыть</button>
      <p>Content</p>
    </div>
  )
}
