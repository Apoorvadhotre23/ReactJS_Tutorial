import Child from "./Child";

function ParentControl() {

    function displayName(name) {
        alert(name);
    }

  return (
    <div>
        <h3>Calling Parent Function from Child</h3>
        <Child displayName={displayName} name={"Apoorva"}/>
    </div>
  )
}

export default ParentControl