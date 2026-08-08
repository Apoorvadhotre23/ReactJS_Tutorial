import { useEffect, useState } from "react";


function Loader() {

    const[user, setUsers] = useState([]);
    let [load, setLoader] = useState(false);

   async function displayData() {
        const url = await "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        setUsers(response);
        setLoader(false);

    }

    useEffect(()=>{
        setLoader(true);
        displayData();
    }, []);

  return (
    <div>
        <h2>Integrate Json Server with API and Loader</h2>
        {!load? 
        
    
            user.map((item, index)=>(
                <h5 key={index}>{item.firstName}</h5>
            ))
    
    
        
        :<h1>Data Loading....</h1>}
        
    </div>
  )
}

export default Loader