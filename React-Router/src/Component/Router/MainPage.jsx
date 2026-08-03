import About from "./About"
import Home from "./Home"

import {Routes, Route, Link} from "react-router-dom"


function MainPage() {
  return (
    <div>
        <h1>Main Page</h1>

        <Link to="/home">Home</Link> <br />
        <Link to="/about">About</Link>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
        </Routes>
    </div>
  )
}

export default MainPage