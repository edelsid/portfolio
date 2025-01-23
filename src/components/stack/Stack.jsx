import StackList from "./StackList"
import "./stack.css"

export default function Stack() {
  return (
    <section className="stack">
      <div className="stack__wrapper">
        <h2 className="title title_section">В чем я разбираюсь</h2>
        <StackList />
      </div>
    </section>
  )
}
