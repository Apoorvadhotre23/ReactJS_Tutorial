import User from "./User";


function Parent() {

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
        <h3>User Details</h3>
           {userData.map((items)=>(
            <div>
                <User user={items}/>
            </div>
           ))}
        
    </div>
  )
}

export default Parent