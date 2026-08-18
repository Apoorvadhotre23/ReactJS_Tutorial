import { useState } from "react"


function ChangeText() {
    const[text, setText] = useState("Welcome to our Page!");

    function change() {
      setText("This is React Learning page welcome again!");
      setTimeout(()=>{
         setText("Welcome to our Page!");
      }, 3000);
       
    }

  return (
    <div>
        <h4>Change Text</h4>
        <h5>{text}</h5>
        <button onClick={change}>change text</button>
    </div>
  )
}

export default ChangeText