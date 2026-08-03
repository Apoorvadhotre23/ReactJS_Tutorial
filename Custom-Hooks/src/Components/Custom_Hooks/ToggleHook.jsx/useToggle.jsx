import { useState } from "react"


function useToggle() {
    const[display, setDisplay] = useState(true);

    function toggle() {
        setDisplay(!display);
    }
  return (
    {
        display, toggle
    }
  )
}

export default useToggle