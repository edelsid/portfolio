import Socials from "../Socials"
import data from "../../assets/data/socials.json" with { type: "json" };
import "./character.css"

export default function Character() {
  return (
    <section className="char">
      <div className="hello">
        <p className="hello__msg">привет</p>
        <h1 className="title title_site">Я Ксения</h1>
      </div>
      <div className="char__desc">
        <p className="char__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Socials data={data}/>
      </div>
    </section>
  )
}
