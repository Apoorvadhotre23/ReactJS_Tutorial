import { useRef } from "react"


function ChangeBackground() {

    let divRef = useRef(null);

    function changeHandler() {
       if(divRef.current.style.backgroundColor !="pink") {
          divRef.current.style.backgroundColor ="pink";
       } else {
        divRef.current.style.backgroundColor ="white"
       }
    }

  return (
    <div>
        <h3>Change Background colour</h3>
        <div style={{
            width:"200px",
            height:"200px",
            border: "1px solid black"
            }} ref={divRef}>

        </div> <br />

            <button onClick={changeHandler}>Change</button>

    </div>

        
  )
}

export default ChangeBackground