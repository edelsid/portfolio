import Portrait from "./Portrait"
import "./about.css"

export default function About() {
  return (
    <section className="about">
      <h2 className="title title_section">Подробнее обо мне</h2>
      <div className="about__content">
        <Portrait />
        <div className="about__text">
          <p>
            Я пришла в разработку из&nbsp;креативных сфер, пройдя путь от&nbsp;рисования макетов 
            веб-сайтов до&nbsp;самостоятельной их верстки. Из&nbsp;своей прошлой деятельности
            я&nbsp;вынесла навыки работы в&nbsp;Adobe Photoshop, Corel Draw, Figma, 
            немного Adobe Illustrator, и,&nbsp;надеюсь, определенное чувство вкуса 🙂 
          </p>
          <p>
            Помимо этих инструментов я&nbsp;также хорошо владею английским языком (C1), 
            в&nbsp;свободное время периодически что-то рисую или&nbsp;перевожу.
          </p>
          <p>
            Хотите видеть все, что есть выше, в&nbsp;одном лаконичном документе? 
            Тогда я&nbsp;приглашаю вас <a className="cv-link" href="download/cha.xenia_resume.pdf" download>скачать мое резюме</a>. 
            Буду рада наладить с&nbsp;вами контакт и&nbsp;получить обратную связь!
          </p>
        </div>
      </div>
    </section>
  )
}
