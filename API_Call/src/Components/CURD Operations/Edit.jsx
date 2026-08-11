import { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import "./Add.css";


function Edit() {
  const { id } = useParams();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const[msg, setMsg] = useState("");

  useEffect(() => {
    async function getUser() {
      let response = await fetch(
        `http://localhost:3000/users/${id}`
      );

      response = await response.json();

      console.log(response);

      setFname(response.firstName);
      setLname(response.lastName);
      setAge(response.age);
    }

    getUser();
  }, [id]);


   async function updateUser(e) {
    e.preventDefault();

    const updatedUser = {
      id: id,
      firstName: fname,
      lastName: lname,
      age: age
    };

    let response = await fetch(
      `http://localhost:3000/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
      }
    );

    if (response.ok) {
      setMsg("User updated successfully!");
      navigate("/");
    }
  }

  return (
    <div className="form-container">
      <h2>Edit User</h2>

      <form>
        <div className="form-group">
          <label>ID:</label>
          <input type="text" value={id} disabled />
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" onClick={updateUser}>Update User</button>
      </form> <br />
      {msg}
    </div>
  );
}

export default Edit;