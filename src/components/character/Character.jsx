import Socials from "../Socials"
import socials from "../../assets/data/socials";
import "./character.css"

export default function Character() {
  return (
    <section className="char">
      <div className="hello">
        <p className="hello__msg">привет</p>
        <h1 className="title title_site">Я Ксения</h1>
      </div>
      <div className="char__desc">
        <div className="char__text">
          <p>
            Фронтенд-разработчик.
          </p>
          <p>
            Пишу код с 2023 года. Мне интересны как креативные проекты, 
            так и практичные деловые утилиты. На данный момент специализируюсь на Реакте, 
            но всегда непротив расширить свой кругозор.
          </p>
        </div>
        <Socials data={socials}/>
      </div>
    </section>
  )
}
