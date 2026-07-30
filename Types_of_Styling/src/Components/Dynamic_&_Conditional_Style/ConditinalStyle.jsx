

import { useState } from "react"
import img from "../../assets/user_card2.png"

function ConditinalStyle() {

    const[design, setDesign] = useState(false);

    const cardStyle = {
        width:"200px", 
        border:"1px solid #ccc", 
        boxShadow:"1px 2px 3px 0px #8b8787", 
        padding:"5px",
        margin: "10px"
    }
  return (
    <>
    <button onClick={()=>{setDesign(!design)}}> {design ? "No Wrap" : "Wrap"}</button>
    <div style={{display:design?"flex":"block", flexWrap:design?"wrap":"no-wrap"}}>
      <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
      </div>

        <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
      </div>

        <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
      </div>

        <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
      </div>

        <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
      </div>

      <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
       </div>

       <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
       </div>
       <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
       </div>
       <div style={cardStyle}>
        <img src={img} width={"200px"} />
        <h3 style={{margin:"15px"}}>Apoorva</h3>
        <h3 style={{margin:"15px"}}>Software Developer</h3>
       </div>
    </div>
    
    </>

  )
}

export default ConditinalStyle