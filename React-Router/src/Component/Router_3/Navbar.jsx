import {Link} from "react-router-dom"
import "./index.css"

function Navbar() {
  return (
    <div className="navsection">
        <Link className="link" to="/home"><h2>Logo</h2></Link>

        <div className="items">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar