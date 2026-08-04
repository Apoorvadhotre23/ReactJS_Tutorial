import About from "./About2"
import Home from "./Home2"
import Contact from "./Contact"


import {Routes, Route} from "react-router-dom"
import NavBar from "./NavBar"


function MainPage2() {
  return (
    <div>
        <h1>Main Page</h1>
        <NavBar/>

        <Routes>
            <Route path="/home2" element={<Home/>}/>
            <Route path="/about2" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default MainPage2