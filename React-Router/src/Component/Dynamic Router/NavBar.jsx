import { Link, Outlet } from "react-router-dom"
import "./dynamic.css"

function NavBar() {
  return (
  <div>
    <div className="divMain">
        <Link to="/home"><h2>Logo</h2></Link>
        <div className="links">
            <Link to="/login"><h4>Login</h4></Link>
            <Link to="/home"><h4>Home</h4></Link>
            <Link to="/about"><h4>About</h4></Link>
            <Link to="/college"><h4>College</h4></Link>
            <Link to="/users"><h4>Users</h4></Link>
        </div>
    </div>
    <Outlet/>
  </div>
  )
}

export default NavBar