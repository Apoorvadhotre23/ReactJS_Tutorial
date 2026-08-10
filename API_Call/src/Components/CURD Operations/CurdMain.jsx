import Add from "./Add"
import DisplayPage from "./DisplayPage"
import NavBar from "./NavBar"
import { Routes, Route } from "react-router-dom"


function CurdMain() {
  return (
    <div>
         <NavBar/>
        <Routes>
            <Route path="/" element={<DisplayPage/>}/>
            <Route path="/add" element={<Add/>}/>
        </Routes>
        
    </div>
  )
}

export default CurdMain