import { useState } from "react"

function Like_button() {
    const [like, setLike] = useState(true)
  return (
    <div>
        <h3>Like Button</h3>
        {/* {like ? <span>❤️</span>: <span>🤍</span>} <button onClick={()=>setLike(!like)}>Like</button> */}

        <span onClick={()=>setLike(!like)}
                style={{
                fontSize: "30px",
                cursor: "pointer"
                }}>{like ? "❤️" : "🤍"}</span>
    </div>
  )
}

export default Like_button