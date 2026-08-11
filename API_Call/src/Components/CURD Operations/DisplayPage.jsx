import { useEffect, useState } from "react";
import "./DisplayPage.css";
import { useNavigate } from "react-router-dom";

function DisplayPage() {
  const [user, setUser] = useState([]);
  const[msg, setMsg] = useState("");
  const navigate= useNavigate();
 
  async function getUser() {
    const url = "http://localhost:3000/users";

    let response = await fetch(url);
    response = await response.json();

    setUser(response);
  }


  useEffect(() => {
    getUser();
  }, []);

  // -------------------- Delete Function Logic ------------------------//

 async function deleteUser(id) {
  let response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE"
  });

  if(response.ok) {
    setMsg("User Deleted Sucessfully!")
  }
  getUser(); 
}

//------------------------------------Edit User--------------------------------------//

async function edituser(id) {
  navigate("/edit/"+id);
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
              <td className="button-div">
                <button onClick={()=>deleteUser(item.id)}>delete</button>
                <button onClick={()=>edituser(item.id)}>edit</button>
              </td>
              
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