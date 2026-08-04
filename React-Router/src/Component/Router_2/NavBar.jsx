import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div>
        <Link to="/home2"><h3>Home</h3></Link>
        <Link to="/about2"><h3>About</h3></Link>
        <Link to="/contact"><h3>Contact</h3></Link>
    </div>
  )
}

export default NavBar