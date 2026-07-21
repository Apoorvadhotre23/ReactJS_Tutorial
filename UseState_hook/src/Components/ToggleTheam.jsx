import { useState } from "react"

function ToggleTheam() {
    const[colour, setColour] = useState("black");

  function colourChange() {
  setColour((previousColour) =>
    previousColour === "black" ? "white" : "black"
  );
}

  return (
    <div>
        <h3>Toggle Theam</h3>
         <button onClick={colourChange}>Change</button> <br />
        <div style={{height:"200px", width:"200px", backgroundColor:colour}}> </div>
       
    </div>
  )
}

export default ToggleTheam