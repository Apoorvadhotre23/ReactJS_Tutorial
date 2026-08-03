import useToggle from "../ToggleHook.jsx/useToggle"

function DarkMode() {

    const {display , toggle} = useToggle();

  return (
    <div>
        <h3>Dark and Light Mode</h3>

        <div
            style={{
                backgroundColor:display? "black": "white",
                color:display?"white": "black",
                minHeight:"100vh",
                padding:"20px"

            }}
        >

            <h1>{display ? "Dark Mode" : "Light Mode"}</h1>
             <button onClick={toggle}> Change Theme</button>
        </div>
        
    </div>

  )
}

export default DarkMode