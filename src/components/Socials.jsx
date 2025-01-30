export default function Socials({ data, isFooter }) {
  if (isFooter) {
    data = data.slice(1);
  }

  return (
    <ul className={`socials socials_${isFooter ? "footer" : "header"}`}>
      {data.map((item) => 
      <li className="socials__item" key={item.id}>
        <a 
          href={item.link} 
          className="socials__link" 
          id={item.title} 
          target="_blank">
          <div className="highlight"></div>
          <img className="socials__icon" src={item.img}/>
        </a>
      </li>)}
    </ul>
  )
}
