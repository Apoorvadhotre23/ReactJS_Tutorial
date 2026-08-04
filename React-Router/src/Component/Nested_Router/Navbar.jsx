import {Link} from "react-router-dom"
import "./index.css"

function Navbar() {
  return (
    <div className="maindiv">
        <Link className="logo" to="/home"><h1>Logo</h1></Link>

        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/college">College</Link>

          
        </div>
    </div>
  )
}

export default Navbar