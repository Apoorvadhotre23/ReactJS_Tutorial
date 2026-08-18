// When you pass only function reference i.e function name then
//  it will call the functions when you want, it will not render automatically
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