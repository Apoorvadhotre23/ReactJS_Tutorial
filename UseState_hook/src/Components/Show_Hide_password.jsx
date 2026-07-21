import { useState } from "react"


function Show_Hide_password() {

    const[show, setShow] = useState(false)

    function TogglePassword() {
        setShow(!show)
    }

  return (
    <div>
        <h3>Show Hide password</h3>
        <input type={show? "text" : "password"} placeholder="Enter Password"></input>
        <button onClick={TogglePassword}>{show? "Hide": "show"}</button>
    </div>
  )
}

export default Show_Hide_password