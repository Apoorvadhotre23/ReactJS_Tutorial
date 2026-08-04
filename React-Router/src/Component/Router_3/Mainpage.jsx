import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
// import PageNotFound from "./PageNotFound"

function Mainpage() {
  return (
    <div>
        <Navbar/>

        <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            {/* <Route path="/*" element={<PageNotFound/>}/> */}
            <Route path="/*" element={<Navigate to="/home"/>}/>
        </Routes>
        

    </div>
  )
}

export default Mainpage