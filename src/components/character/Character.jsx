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
            Пишу код с&nbsp;2023 года. Мне интересны как креативные, так и&nbsp;практичные,
            деловые проекты. На&nbsp;данный момент специализируюсь на&nbsp;Реакте, 
            но&nbsp;всегда не&nbsp;против расширить свой кругозор.
          </p>
        </div>
        <Socials data={socials} isFooter={false}/>
      </div>
    </section>
  )
}
