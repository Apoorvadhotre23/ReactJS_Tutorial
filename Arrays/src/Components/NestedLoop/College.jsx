import Student from "./Student"


function College({college, index}) {
  return (
    <div key={index} style={{backgroundColor:"#ccc", padding:"10px", margin:"10px", borderRadius:"10px", borderBottom:"2px solid black"}}>
        <h3>Name:{college.name}</h3>
        <h3>City:{college.city}</h3>
        <h3>Website:{college.website}</h3>
        <h4>Student Details
            <Student student={college.Student}/>
        </h4>
    </div>
  )
}

export default College