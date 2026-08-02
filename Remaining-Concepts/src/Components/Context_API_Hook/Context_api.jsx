import { useState } from "react"
import College_Component from "./College_Component"
import { SubjectContext } from "./ContextData"


function Context_api() {
  const[subject, setSubject] = useState();
  return (
    <div style={{backgroundColor:"yellow", padding:10}}>
      <SubjectContext.Provider value={subject}>

    <select value={subject} onChange={(e)=>setSubject(e.target.value)}>
      <option value="">Select</option>
      <option value={"Maths"}>Maths</option>
      <option value={"History"}>History</option>
      <option value={"English"}>English</option>
    </select> 

    <button onClick={()=>setSubject('')}>clear</button>

        <h3>Context API</h3>
        <College_Component/>
      </SubjectContext.Provider>
       
    </div>
  )
}

export default Context_api