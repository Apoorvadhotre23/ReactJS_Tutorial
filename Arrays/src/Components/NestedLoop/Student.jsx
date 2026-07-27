
function Student({student}) {
  return (
    <div>
         <div>
            {student.map((item)=>(

               <div style = {{
                backgroundColor:"#bdb3b3", 
                width:"200px", 
                fontSize:"14px",
                padding:"5px",
                margin:"8px", 
                borderRadius:"10px"}}>

                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>Email: {item.email}</p>
               </div>

            ))}
         </div>
    </div>
  )
}

export default Student