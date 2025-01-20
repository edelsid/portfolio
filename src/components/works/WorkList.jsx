export default function WorkList() {
  const expand = (e) => {
  }

  return (
    <ul className="work__list">
      <li className="work__item" onClick={expand}>
        <h3 className="title title_work">Работа 1</h3>
      </li>
      <li className="work__item" onClick={expand}>
        <h3 className="title title_work">Работа 2</h3>
      </li>
      <li className="work__item" onClick={expand}>
        <h3 className="title title_work">Работа 3</h3>
      </li>
    </ul>
  )
}