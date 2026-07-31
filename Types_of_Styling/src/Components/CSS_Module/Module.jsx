import style from "./index.module.css"

function Module() {
  return (
    <div>
        <h1 className={style.heading}>This id Module CSS</h1>
        <p className={style.p}>In module css we apply css to a particular element</p>
    </div>
  )
}

export default Module