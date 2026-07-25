import { useState } from "react"

function CheckBox() {
    const[skills, setSkills] = useState([]);

    function handleSkills(event) {
        console.log(event.target.value, event.target.checked);

        if(event.target.checked){
            setSkills([...skills, event.target.value]);
        } else {
             setSkills(skills.filter((skill) => skill != event.target.value));
        }
        
    }
  return (
    <div>
        <h3>Handling Check Boxes</h3>

        <input type="checkbox" id="php"  onChange={handleSkills} value="PHP"/>
        <label htmlFor="php">PHP</label>
        <br /><br />

        <input type="checkbox" id="java" onChange={handleSkills} value="Java"/>
        <label htmlFor="java">Java</label>
        <br /><br />

        <input type="checkbox" id="react" onChange={handleSkills} value="ReactJs"/>
        <label htmlFor="react">React JS</label>
        <br /><br />

        <input type="checkbox" id="boot" onChange={handleSkills} value="Spring Boot"/>
        <label htmlFor="boot">Spring Boot</label>
        <br /><br />

        <h3>{skills.join(", ")}</h3>

    </div>
  )
}

export default CheckBox