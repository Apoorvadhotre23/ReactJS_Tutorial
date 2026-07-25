import { useState } from "react"

function RadioButton() {

  const[gender, setGender] = useState("")
    
  function genderFun(event) {
    setGender(event.target.value)
  }
  return (
    <div>
        <h3>Handling Radio Button</h3>

        <h4>Gender selected: {gender}</h4>

        <input type="radio" id="male" name="gender" value="Male" onChange={genderFun}/>
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" name="gender" value="Female" onChange={genderFun}/>
        <label htmlFor="female">Female</label>
    </div>
  )
}

export default RadioButton