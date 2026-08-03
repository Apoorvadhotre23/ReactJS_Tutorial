import useToggle from "./useToggle"

function ToggleApp() {
    const {display, toggle} = useToggle();
  return (
    <div>
        <h3>Toggle App</h3>
        <button onClick={toggle}>Toggle btn</button>
        {display? <h2>Hello world</h2>: null}
    </div>
  )
}

export default ToggleApp