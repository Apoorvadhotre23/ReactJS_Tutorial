import Add from "./Add"
import DisplayPage from "./DisplayPage"
import Edit from "./Edit"
import NavBar from "./NavBar"
import { Routes, Route } from "react-router-dom"


function CurdMain() {
  return (
    <div>
         <NavBar/>
        <Routes>
            <Route path="/" element={<DisplayPage/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
        
    </div>
  )
}

export default CurdMain