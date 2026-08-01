// forwardRef allows a child component to forward a ref from its parent to one of its DOM elements.

import { useRef } from "react"
import ForwardChild from "./ForwardChild";



function ForwardRef() {

  let inputRef = useRef();

  function handler() {
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.value = 100;
  }

  return (
    <div>
      <h3>Forward Ref</h3>
      <ForwardChild ref={inputRef}/>
      <button onClick={handler}>focus</button>
    </div>
  )
}

export default ForwardRef