import { Link, Outlet } from "react-router-dom"
import "./dynamic.css"

function College() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>College Page</h1>
      <div className="subLinks">
        <Link to="students"><h3>Students</h3></Link>
        <Link to="enrollment"><h3>Enrollment</h3></Link>
        <Link to="collegeDetail"><h3>College_Details</h3></Link>
        <Link to="/home"><h3>Back</h3></Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default College