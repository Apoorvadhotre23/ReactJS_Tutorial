
function Arrays() {
    let fruits = ["Apple", "Banana", "Mango"];
    let animals = ["Cat", "Dog", "Cow", "Goat"];
  return (
    <div>
        <h3>Arrays</h3>
        <p>{fruits[0]}</p>
        <p>{fruits[1]}</p>
        <p>{fruits[2]}</p>
    
        <h3>Animals</h3>
        {
            animals.map((animal)=>(
                <p>{animal}</p>
            ))
        }
    </div>
  )
}

export default Arrays