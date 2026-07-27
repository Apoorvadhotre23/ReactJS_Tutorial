import { useEffect } from "react";
import { useState } from "react"


function Example1() {
    const[count, setCount] = useState(0);

    function increment() {
        setCount(count+1);
    }

    function counter(){
        console.log(count);
    }
   

    useEffect(()=>{
        counter();
    }, []);

    // useEffect(()=>{
    //     counter();
    // }, [count]);



  return (
    <div>
        <h3>Counter</h3>
        <h4>Counter: {count}</h4>
        <button onClick={increment}>counter</button>
    </div>
  )
}

export default Example1