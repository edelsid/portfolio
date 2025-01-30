
export default function Links({ links }) {
  return (
    <nav className="content__links">
      <ul className="content__links-wrapper">
        {links.map((item) => <li className="links__item" key={links.indexOf(item)}>
          <a className="btn btn_standart btn_work" href={item.link}>
            {item.name}
          </a>
        </li>)}
      </ul>
    </nav>
  )
}
