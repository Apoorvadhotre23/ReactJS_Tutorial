import { useEffect, useState } from "react";
import "./DisplayPage.css";

function DisplayPage() {
  const [user, setUser] = useState([]);

 
  useEffect(() => {
     async function getUser() {
    const url = "http://localhost:3000/users";

    let response = await fetch(url);
    response = await response.json();

    setUser(response);
  }



    getUser();
  }, []);

  return (
    <div className="container">
      <h2>Data Details</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>

        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayPage;