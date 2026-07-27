
function User({user}) {
  return (
    <div>
        <span><b>Id: </b></span>{user.id} <br />
        <span><b>Name: </b></span>{user.name} <br />
        <span><b>Email: </b></span>{user.email} <br />
        <span><b>Age: </b></span>{user.age} <br /> <br />
    </div>
  )
}

export default User