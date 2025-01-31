export default function Slide({ img, id, active }) {
  return (
    <li className={`slider__item ${active === id ? "content_visible" : ""}`}>
      <img className="content__showcase" src={img} alt="баннер проекта"/>  
    </li>
  )
}
