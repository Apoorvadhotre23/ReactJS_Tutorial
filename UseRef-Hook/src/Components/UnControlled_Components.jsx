import {useRef } from "react";


function UnControlled_Components() {

    let userRef = useRef();
    let passwordRef = useRef();

    function handleForm(event) {
        event.preventDefault();
        let user = document.querySelector('#user').value;
        console.log(user);
        let password = document.querySelector('#password').value;
        console.log(password);   
    }


    function handleFormRef(event) {
        event.preventDefault();


        let user = userRef.current.value;
        console.log(user);
        
        let password = passwordRef.current.value;
        console.log(password);
        
    }

  return (
    <div>
        <div>
             <h3>UnControlled Components</h3>
             <form action="" onSubmit={handleForm}>
                <input type="text"  id="user" placeholder="Enter name"/> <br /><br />
                <input type="password"  id="password" placeholder="Enter password"/> <br /><br />
                <button>submit</button>
             </form>
        </div>


        <div>
             <h3>UnControlled Component useing useRef</h3>
             <form action="" onSubmit={handleFormRef}>
                <input type="text" placeholder="Enter name" ref={userRef}/> <br /><br />
                <input type="password" placeholder="Enter password" ref={passwordRef}/> <br /><br />
                <button>submit</button>
             </form>
        </div>
    </div>
  )
}

export default UnControlled_Components