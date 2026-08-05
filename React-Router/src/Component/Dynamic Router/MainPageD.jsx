import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "./Login"
import Home from "./Home"
import About from "./About"
import College from "./College"
import Student from "./College File/Student"
import Enrollment from "./College File/Enrollment"
import CollegeDetail from "./College File/CollegeDetail"
import UserList from "./UserList/UserList"
import UserDetail from "./UserList/UserDetail"

function MainPageD() {
  return (
    
    <div>
        
        <Routes>
            <Route element={<NavBar/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/about" element={<About/>}/>
               <Route path="/users" element={<UserList/>}/>
               <Route path="/users/:id/:name" element={<UserDetail/>}/>
            </Route>
           
            <Route path="/college" element={<College/>}>
                <Route path="students" element={<Student/>}/>
                <Route path="enrollment" element={<Enrollment/>}/>
                <Route path="collegeDetail" element={<CollegeDetail/>}/>
            </Route>
           

        </Routes>
   
  </div>
  )
}

export default MainPageD