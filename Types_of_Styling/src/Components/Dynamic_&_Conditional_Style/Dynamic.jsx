import { useState } from "react"
import img from "../../assets/user_card2.png"


function Dynamic() {

    
    const[cardStyle, setCardStyle] = useState({
        width:"210px", 
        border:"1px solid #ccc", 
        boxShadow:"1px 2px 3px 0px #8b8787", 
        padding:"5px",
        margin: "10px",
        color: "black"
    })

    function change(bgColour, c) {
        setCardStyle({...cardStyle, backgroundColor:bgColour, color: c});
    }
 
  return (
    <div style={{ padding:"10px"}}>
      <div style={cardStyle}>
        <img src={img} style={{width:"200px", margin:"5px"}} />
        <h3 style={{marginLeft:"15px"}}>Apoorva</h3>
        <h3 style={{marginLeft:"15px"}}>Software Developer</h3>
      </div>

      <button style={{
                marginLeft:"10px", 
                marginTop:"20px"}} 
                onClick={()=>{change('#c5bfbf', 'red')}}>Grey Theam</button>

      <button style={{
                marginLeft:"10px", 
                marginTop:"20px"}} 
                onClick={()=>{change('white', 'black')}}>Default Theam</button>
    </div>
    
  )
}



export default Dynamic