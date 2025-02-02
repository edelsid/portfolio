export default function StackList() {
  const stack = ["HTML5", "CSS3", "SCSS/SASS", "JavaScript", "React", "Redux Toolkit", "Vite"];

  return (
    <ul className="stack__list">
      {stack.map((item) => 
      <li className="stack__item">
        <span className="stack__inner">
          {item}
        </span>
      </li>)}
    </ul>
  )
}
