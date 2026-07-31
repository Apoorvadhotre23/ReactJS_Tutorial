import { useRef } from "react"


function ClearInput() {

    let inputRef = useRef(null);

    function clear() {
        inputRef.current.value = "";
    }

  return (
    <div>
        <h3>Clear Input</h3>
        <input type="text" ref={inputRef}/>
        <button onClick={clear}>Clear Input</button>
    </div>
  )
}

export default ClearInput