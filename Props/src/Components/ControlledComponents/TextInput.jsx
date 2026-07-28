import { useState } from "react";

function TextInput() {

    const [name, setName] = useState("");

  return (
     <div style={{border:"2px solid black", padding:"20px", width:"300px"}}>
     <input
     type="text" 
     value={name} 
     onChange={(event)=>setName(event.target.value)}/>

      <h2>Your Name: {name}</h2>
    </div>
  )
}

export default TextInput