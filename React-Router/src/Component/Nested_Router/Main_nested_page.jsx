import {Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"
import Home from "./Home"
import About from "./About"
import College from "./College"
import PageNotFound from "./PageNotFound"
import CollegeDetails from "./Nested_file/CollegeDetails"
import Enrollment from "./Nested_file/Enrollment"
import Student from "./Nested_file/Student"

function Main_nested_page() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/college" element={<College/>}>
                <Route path="collegDetail" element={<CollegeDetails/>}/>
                <Route path="enrollment" element={<Enrollment/>}/>
                <Route path="student" element={<Student/>}/>
            </Route>
            <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default Main_nested_page