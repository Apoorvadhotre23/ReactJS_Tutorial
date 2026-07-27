import { useEffect, useState } from "react"

function Clock() {

    const[time, setTime] = useState();

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, [])
    })

  return (
    <div>
        <h4>Digital Clock in React JS</h4>
        <h4 style={{color:"white", backgroundColor:"black", width:"80px", padding:"10px", borderRadius:"2px"}}>
            {time}
        </h4>
    </div>
  )
}

export default Clock