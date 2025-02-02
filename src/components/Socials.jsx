export default function Socials({ data, isFooter }) {
  return (
    <ul className={`socials socials_${isFooter ? "footer" : "header"}`}>
      {data.map((item) => 
      <li className={`${!isFooter && "socials__item"}`} key={item.id}>
        <a 
          href={item.link} 
          className="socials__link" 
          id={item.title} 
          target="_blank">
          {!isFooter && <div className="highlight"></div>}
          <img className="socials__icon" src={item.img} alt="иконка соцсети"/>
          {isFooter && <p>{item.text}</p>}
        </a>
      </li>)}
    </ul>
  )
}
