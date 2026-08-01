

function UserList({search}) {

    const users = ["Apoorva", "Rahul", "Kiran"];

    const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
        <ul>
      {filteredUsers.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
    </div>
  )
}

export default UserList