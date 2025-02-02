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
            Я пришла в разработку из креативных сфер, поэтому неудивительно, 
            что мое внимание привлек именно фронтенд! Из своей прошлой деятельности 
            я вынесла навыки работы в Adobe Photoshop, Corel Draw, Figma, 
            немного Adobe Illustrator, и, надеюсь, определенное чувство вкуса :) 
          </p>
          <p>
            Помимо этих инструментов я также хорошо владею английским языком, 
            в свободное время периодически что-то рисую или перевожу.
          </p>
          <p>
            Хотите видеть все, что есть выше, в одном лаконичном документе? 
            Тогда я приглашаю вас <a className="cv-link" href="download/file.pdf" download>скачать мое резюме</a>. 
            Буду рада наладить с вами контакт и получить обратную связь!
          </p>
        </div>
      </div>
    </section>
  )
}
