//If you call function using brakets() then it will automatically called when ever the page is render
function FunExample() {

    function greet() {
        return "Good Morning";
    }

  return (
    <div>
        <h4>{greet()}</h4>   
    </div>
  )
}

export default FunExample