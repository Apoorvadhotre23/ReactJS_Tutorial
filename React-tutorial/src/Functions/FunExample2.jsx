// When you pass only function refernce i>e function name then
//  it will call when you want, it will not remder automatically
function FunExample2() {

    function greet() {
       alert("Good Evening!")
        
    }

  return (
    <div>
        <h3>Function reference</h3>
        <button onClick={greet}>click me!</button>
    </div>
  )
}

export default FunExample2