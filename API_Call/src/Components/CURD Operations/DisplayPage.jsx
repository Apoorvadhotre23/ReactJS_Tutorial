import { useEffect, useState } from "react";
import "./DisplayPage.css";

function DisplayPage() {
  const [user, setUser] = useState([]);
  const[msg, setMsg] = useState("");

 
  async function getUser() {
    const url = "http://localhost:3000/users";

    let response = await fetch(url);
    response = await response.json();

    setUser(response);
  }


  useEffect(() => {
    getUser();
  }, []);

 async function deleteUser(id) {
  let response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE"
  });

  if(response.ok) {
    setMsg("User Deleted Sucessfully!")
  }
  getUser(); 
}

  return (
    <div className="container">
      <h2>Data Details</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td><button onClick={()=>deleteUser(item.id)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {msg}
    </div>
  );
}

export default DisplayPage;