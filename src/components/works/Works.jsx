import { useState } from "react"
import Content from "./Content"
import WorkList from "./WorkList"
import "./works.css"

export default function Works() {
  const [ open, setOpen ] = useState(false);

  const close = () => {
    const openedWindow = document.querySelector(".card_open");
    openedWindow.classList.remove("card_open");
    openedWindow.classList.add("card_closed");
    openedWindow.style.transform = "";
    document.body.style.overflow = "visible";
    setOpen(false);
  }

  return (
    <section className="works">
      <h2 className="title title_section">Мои работы</h2>
      <WorkList setOpen={setOpen}/>
      {open && <Content close={close}/>}
    </section>
  )
}
