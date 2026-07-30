import img from "../../assets/user_card2.png"

function UserCard() {

    const cardStyle = {
        width:"200px", 
        border:"1px solid #ccc", 
        boxShadow:"1px 2px 3px 0px #8b8787", 
        padding:"5px",
        margin: "10px"
    }
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
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
    
  )
}

export default UserCard