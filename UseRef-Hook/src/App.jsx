import { useRef } from "react";

function App() {

  const inputRef = useRef(null);

  function handle(){
    inputRef.current.focus();
    inputRef.current.style.color = 'red';
    inputRef.current.placeholder = 'Enter your name';
  }

  return (
    <div>
      <h3>Input Focus</h3>
      <input type="text" ref={inputRef}/> 
      <button onClick={handle}>Focus Input</button>
    </div>
  )
}

export default App