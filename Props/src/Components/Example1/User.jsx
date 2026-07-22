
function User(props) {
  return (
    <div>
        <h3>User Details</h3>

      <div>
        <img src="/src/assets/card.webp" height={"150px"} width={"100px"}/>
        <p><b>Name: </b>{props.name}</p>
        <p><b>Role: </b>{props.role}</p>
        <p><b>Place: </b>{props.place}</p>

      </div>
        
    </div>
  )
}

export default User