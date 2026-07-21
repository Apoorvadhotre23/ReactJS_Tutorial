
//  function call() {
//         alert(" Outer Function call");
//     }

function FunExample3() {

    function call() {
        alert(" Inner Function call");
    }

  return (
    <div>
        <h3>Function call</h3>
        <button onClick={call}>Click me!</button>
    </div>
  )
}

export default FunExample3

//If you have inner and outer function then 1st it call inner if inner function 
// doesn't fine then it will execute outer function