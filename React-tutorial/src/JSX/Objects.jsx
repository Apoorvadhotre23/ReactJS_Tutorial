
function Objects() {

    const student = {
            name: "Apoorva",
            age: 22,
            skills: ["Java", "React", "SQL"],
            address: {
                city: "Bangalore",
                state: "Karnataka"
            }
        };

  return (
    <div><h1>Objects Accessing in ReactJs</h1>

        <h3>Student Details</h3>
        <p>{student.name}</p>
        <p>{student.age}</p>
        <p>{student.skills[0] + " | " + student.skills[1] + " | " + student.skills[2] }</p>
        <p>Addres: {student.address.city}  | {student.address.state}</p>
    </div>
    
  )
}

export default Objects