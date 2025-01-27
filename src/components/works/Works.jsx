import data from "../../assets/data/projects.json" with { type: "json" };
import { useState } from "react"
import Content from "./Content"
import WorkList from "./WorkList"
import "./works.css"

export default function Works() {
  const [ open, setOpen ] = useState(false);
  const [ content, setContent ] = useState(null);

  const closeCard = () => {
    const openedWindow = document.querySelector(".card_open");
    openedWindow.classList.remove("card_open");
    openedWindow.classList.add("card_closed");
    openedWindow.style.transform = "";
    document.body.style.overflow = "visible";
    setContent(null);
    setOpen(false);
  }

  const openCard = (card) => {
    const currentWork = data.find((item) => item.id === Number(card.id));
    setContent(currentWork);
    setOpen(true);
  }

  return (
    <section className="works">
      <h2 className="title title_section">Мои работы</h2>
      <WorkList data={data} openCard={openCard}/>
      {open && <Content content={content} closeCard={closeCard}/>}
    </section>
  )
}
