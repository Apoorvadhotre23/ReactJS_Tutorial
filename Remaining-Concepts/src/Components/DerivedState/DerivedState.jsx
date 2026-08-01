// What is Derived State?

// Derived state is a value that is calculated from existing state or props, 
// instead of being stored as separate state.


import { useState } from "react"


function DrivedState() {

    const[users, setUsers] = useState([]);
    const[user, setUser] = useState("");

    const total = users.length;
    const last = users[users.length-1];
    const unique = [... new Set(users)].length;

    function addUser() {
        if (user.trim() === "") return;

        setUsers([...users, user]);
        console.log(user);

        setUser("");
        
    }
  return (
    <div>
        <h3>Drived State</h3>
        <input type="text" placeholder="Enter here" onChange={(event)=>{setUser(event.target.value)}} value={user}/>
        <button onClick={addUser}>add</button>

        <h3>Total Users:{total}</h3>
        <h3>Last User:{last}</h3>
        <h3>Unique Uers:{unique}</h3>

         <ul>
        {users.map((u, index) => (
          <li key={index}>{u}</li>
        ))}
      </ul>
    </div>
  )
}

export default DrivedState