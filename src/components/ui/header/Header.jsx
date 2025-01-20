import moon from "../../../assets/icons/moon.svg"
import "./header.css"

export default function header() {
  return (
    <header className="header">
      <button className="btn cv-download">Скачать резюме</button>
      <button className="icon theme">
        <img className="icon_moon" src={moon}></img>
      </button>
    </header>
  )
}
