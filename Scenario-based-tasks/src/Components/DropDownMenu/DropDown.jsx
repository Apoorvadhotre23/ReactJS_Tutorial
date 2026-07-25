import { useState } from "react"

function DropDown() {

    const[city, setCity] = useState()

    function cityFun(event) {
        setCity(event.target.value)
    }

  return (
    <div>
        <h3>Drop down Menu</h3>

        <h4>Selected city: {city}</h4>

        <select onChange={cityFun}>
            <option value="">select city</option>
            <option value="Bengaluru" >Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Delhi">Delhi</option>
        </select>
        
    </div>
  )
}

export default DropDown