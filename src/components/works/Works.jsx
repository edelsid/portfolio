import data from "../../assets/data/projects";
import { useState } from "react"
import Content from "./Content"
import WorkList from "./WorkList"
import "./works.css"

export default function Works() {
  const [ open, setOpen ] = useState(false);
  const [ content, setContent ] = useState(null);
  const [ error, setError ] = useState(false);

  const emptyContent = {
    title: "Упс!", 
    text: "Похоже, что-то пошло не так", 
    links: [],
    stack: [], 
    screenshots: [],
    dark: false,
  }

  const closeCard = () => {
    const openedWindow = document.querySelector(".card_open");
    openedWindow.classList.remove("card_open");
    setTimeout(() => {
      openedWindow.classList.add("card_closed"); 
    }, 300);
    openedWindow.style.transform = "";
    document.body.style.overflow = "visible";   
    setContent(null);
    setOpen(false);
  }

  const openCard = (card) => {
    try {
      const currentWork = data.find((item) => item.id === Number(card.id));
      if (!currentWork) {
        setError(true);
        return;
      }
      setContent(currentWork);
      setOpen(true);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <section className="works">
      <h2 className="title title_section">Мои работы</h2>
      <WorkList data={data} openCard={openCard}/>
      {open && 
      <Content 
        content={content || emptyContent} 
        closeCard={closeCard} 
        error={error}
      />}
    </section>
  )
}
