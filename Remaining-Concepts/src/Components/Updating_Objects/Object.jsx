import { useState } from "react"

function Object() {
    const[data, setData] = useState(
        {
            name: "Apoorva",
            address:{
                city: "Benagaluru",
                state:"Karnataka"
            }
        }
    )

    function handle(value) {
    setData({
        ...data,
        name: value
    });
    }
    function handleCity(value) {
    setData({
        ...data,
        address:{
            ...data.address,
            city: value
        }
        
    });
    }
  return (
    <div> 
        <h4>Change data</h4>
        <input type="text" onChange={(e)=>handle(e.target.value)} placeholder="change name"/> <br /> <br />
        <input type="text" onChange={(e)=>handleCity(e.target.value)} placeholder="change city"/> <br />
        <h4>Object Details</h4>
        <sapn><b>Name:</b></sapn>{data.name} <br />
        <span><b>Address:</b></span> <br />
        <span><b>City:</b></span>{data.address.city} <br />
        <span><b>State:</b></span>{data.address.state}

    </div>
    
  )
}

export default Object