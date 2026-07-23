import { useState } from "react"

function OnChangeEvent() {

    const[value, setValue] = useState("");

  return (
    <div>
        <h4>Get Input value</h4>
        <input type="text" placeholder="type here.." value={value} onChange={(event)=>setValue(event.target.value)}/>
        <h3>{value}</h3>
        <button onClick={()=> {setValue("")}}>Clear</button>
    </div>
  )
}

export default OnChangeEvent