import { useEffect, useState } from "react";


function FetchApi() {

    const[users, setUsers] = useState([]);

    async function getApi() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUsers(response.users);
        
    }

     useEffect(()=> {
        getApi();
    }, [])

  return (
    <div>
        <h3>Fetch API</h3>
        {
            users.map((item, index)=>(
                <ul key={index}>
                    <li>{item.firstName} {item.lastName}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default FetchApi