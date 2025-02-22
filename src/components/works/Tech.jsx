export default function Tech({ stack }) {
  return (
    <div className="content__stack">
      <h3 className="title title_stack">Сделано с помощью:</h3>
      <ul>
        {stack.map((item) => <li className="tech" key={stack.indexOf(item)}>{item}</li>)}
      </ul>
    </div>
  )
}
