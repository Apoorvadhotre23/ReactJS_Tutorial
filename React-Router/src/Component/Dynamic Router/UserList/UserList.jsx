import {Link} from "react-router-dom"
import "./user.css"

function UserList() {
    const user = [
        {id: 1, name: "Apoorva"},
        {id: 2, name: "Anuj"},
        {id: 3, name: "Aman"},
        {id: 4, name: "Narendra"},
        {id: 5, name: "Mihir"},
        {id: 6, name: "Rohit"}
    ]
  return (
    <div className="userDiv2">
        <h1>Users List</h1>
        {
            user.map((item, index)=>(
                <div key={index}>
                    <Link to={"/users/" + item.id + "/" + item.name}><h3>{item.name}</h3></Link>
                </div>
            ))
        }
        
    </div>
  )
}

export default UserList