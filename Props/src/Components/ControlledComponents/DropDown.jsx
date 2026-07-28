import { useState } from "react"


function DropDown() {
    const [city, setCity] = useState("");
  return (
    <div>
        <h3>Drop Down</h3>
        <select value={city} onChange={(e)=> setCity(e.target.value)}>
            <option value={""}>Select your city</option>
            <option>Bengaluru</option>
            <option>Hydrabad</option>
            <option>Pune</option>
        </select>

        <h4>Your city: {city}</h4>
    </div>
  )
}

export default DropDown