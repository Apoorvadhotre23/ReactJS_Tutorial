import { useState } from "react"


function ControlledComponent() {

    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("")

  return (
    <div>
        <h3>Controlled Component</h3>

        <label htmlFor="name"><b>Name</b>  </label>
        <input type="text" placeholder="Enter your name" id="name" value={name}
                    onChange={(event)=>setName(event.target.value)}/><br /><br />


        <label htmlFor="password"><b>Password</b>  </label>
        <input type="password" placeholder="Enter your password" id="password" value={password}
                    onChange={(event)=>setPassword(event.target.value)}/><br /><br />

        <label htmlFor="email"><b>Email</b>  </label>
        <input type="text" placeholder="Enter your email" id="email" value={email}
                    onChange={(event)=>setEmail(event.target.value)}/><br /><br />

        <h3>Your details:</h3>
        <h4>Name: {name}</h4>
        <h4>Password: {password}</h4>
        <h4>Email: {email}</h4>

        <button onClick={()=>{setName("");setPassword("");setEmail("")}}>clear</button>
    </div>
  )
}

export default ControlledComponent