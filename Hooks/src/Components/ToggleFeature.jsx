import { useState } from "react"

function ToggleFeature() {

    const [display, setDisplay] = useState(true);

    function HideShow() {
        setDisplay(!display);
    }

  return (
    <div>
        <h3>Hide and Show Features</h3>

        <button onClick={HideShow}>Toggle</button>
        {display ? <h5>Apoorva</h5>:null}
    </div>
  )
}

export default ToggleFeature