import Child from "./Child";

function Parent() {
    
    function greetHello() {
        alert("Hello");
    }

  return (
    <div>
        <h3>Greetings</h3>
        <Child sayHello={greetHello}/>
    </div>
  )
}

export default Parent