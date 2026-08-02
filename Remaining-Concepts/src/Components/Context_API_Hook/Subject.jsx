import { useContext } from "react"
import { SubjectContext } from "./ContextData"


function Subject() {

  const subject = useContext(SubjectContext)

  return (
    <div style={{backgroundColor:"red", padding:10}}>
        <h3>Subject is: {subject}</h3>
    </div>
  )
}

export default Subject