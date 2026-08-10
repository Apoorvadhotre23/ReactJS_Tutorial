import { useState } from "react";
import "./Add.css";

function Add() {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  async function addUser(e) {
    e.preventDefault();

    if (!id || !fname || !lname || !age) {
      setMessage("Please fill all the fields.");
      return;
    }

    const newUser = {
      id: id,
      firstName: fname,
      lastName: lname,
      age: age,
    };

    console.log(id);

    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    response = await response.json();

    console.log(response);

    setId("");
    setFname("");
    setLname("");
    setAge("");

    setMessage("User added successfully!");
  }

  return (
    <div className="form-container">
      <h2>Add Details of New User</h2>

      <form onSubmit={addUser}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            onChange={(e) => setFname(e.target.value)}
            value={fname}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            onChange={(e) => setLname(e.target.value)}
            value={lname}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>

        <button type="submit">Add User</button>

        <h3>
          Entered Details: {id} {fname} {lname} {age}
        </h3>
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
}

export default Add;
