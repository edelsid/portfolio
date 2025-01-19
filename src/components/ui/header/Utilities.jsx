import moon from "../../../assets/icons/moon.svg";

export default function Utilities() {
  return (
    <div className="header__util">
      <button className="btn cv-download">Скачать резюме</button>
      <button className="icon theme">
        <img className="icon_moon" src={moon}></img>
      </button>
    </div>
  )
}
