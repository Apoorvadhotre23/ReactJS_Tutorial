import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-div">
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
    </div>
  );
}

export default NavBar;