import {Link, useParams } from "react-router-dom"
import "./user.css"

function UserDetail() {
    const param  = useParams();

    
  return (
    <div className="userDiv">
        <h2>User Details</h2>
        <h3>User id is: <span style={{color:"blue"}}>{param.id}</span></h3>
        <h3>user Name is: <span style={{color:"blue"}}>{param.name}</span></h3>
        <Link to="/users"><h4>Back</h4></Link>
    </div>
  )
}

export default UserDetail