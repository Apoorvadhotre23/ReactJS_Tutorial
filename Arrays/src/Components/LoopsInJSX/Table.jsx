
function Table() {
  const userData = [

    {
      "id": 1,
      "name": "Apoorva",
      "email": "apoorva@gmail.com",
      "age": 24
    }, 

    {
      "id": 2,
      "name": "Priya",
      "email": "priya@gmail.com",
      "age": 32
    },

    {
      "id": 3,
      "name": "Mohini",
      "email": "mohini@gmail.com",
      "age": 25
    },

    {
      "id": 4,
      "name": "Kajal",
      "email": "kajal@gmail.com",
      "age": 24
    }
  ];
  return (
    <div>
        <h3>User Table</h3>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
          
        </thead>
        <tbody>
          {userData.map((user)=>(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Table