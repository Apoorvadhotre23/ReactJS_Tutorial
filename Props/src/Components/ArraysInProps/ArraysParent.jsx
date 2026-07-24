import ArraysProps from "./ArraysProps"


function ArraysParent() {
  return (
    <div>
         <h3>Passing Arrays as a Props</h3>
         <ArraysProps skills={["Java", "Python", "Testing"]}/>
    </div>
  )
}

export default ArraysParent