export default function Text() {
  return (
    <div className="header__text">
      <div className="hello">
        <p className="hello__msg">Привет</p>
        <h1 className="title title_site">Я Ксения</h1>
      </div>
      <div className="header__desc">
        <p className="desc__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul className="socials socials_header">
          <li className="socials__item">icon</li>
          <li className="socials__item">icon</li>
          <li className="socials__item">icon</li>
        </ul>
      </div>
    </div>
  )
}
