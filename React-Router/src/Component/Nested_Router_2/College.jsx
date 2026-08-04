import {Link, Outlet} from "react-router-dom"

function College() {
  return (
    <div style={{textAlign:"center"}}>
        <h1>College Page</h1>

        <hr />

      <div className="collegeDiv">
          <Link to="/college"><h3>Student</h3></Link>
          <Link to="collegDetail"><h3>College Details</h3></Link>
          <Link to="enrollment"><h3>Enrollment</h3></Link>
          <Link to="/home"><h3>Back</h3></Link>
      </div>
      

      <hr />

      <Outlet />
    </div>
  )
}

export default College