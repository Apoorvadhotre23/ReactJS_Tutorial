import Example3 from "./Example3"

function Example3Parent() {
    let object1 = {
        name: "Narendra",
        role: "MERN Stack developer",
        place: "Banglore"
    }

    let object2 = {
        name: "Aman Gupta",
        role: "Java Stack developer",
        place: "Mumbai"
    }

    let object3 = {
        name: "Virat",
        role: "Python Stack developer",
        place: "Pune"
    }
  return (
    <div>
        <h3>User Details</h3>
        <Example3 object={object1}/>
        <Example3 object={object2}/>
        <Example3 object={object3}/>
    </div>
  )
}

export default Example3Parent