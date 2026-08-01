import Child_lifting from "./Child_lifting";
import { useState } from "react";

function Parent_liftState() {
    const[name, setName] = useState('');
  return (
    <div>
        <h3>Parent Component</h3>
        <h4>{name}</h4>
        <Child_lifting name={name} setName={setName}/>
    </div>

  )
}

export default Parent_liftState