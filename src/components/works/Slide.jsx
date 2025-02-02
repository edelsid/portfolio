export default function Slide({ img, id, active }) {
  const { png, webp } = img;

  return (
    <li className={`slider__item ${active === id ? 
      "content_visible" : ""}`}>
      <picture className="content__showcase">
      <source srcSet={webp} type='image/webp'/>
      <img  
        src={png}
        type='image/png'
        alt="баннер проекта"/>
      </picture>
    </li>
  )
}
