import Video from "../assets/Video.mp4"
import { useRef } from "react";
function VideoPlayPause() {
     const videoRef = useRef(null);
  return (
    <div>
        <h3>Video Play Pause</h3>
        <video src={Video} width={"400px"} ref={videoRef}/>

        <button onClick={() => videoRef.current.play()}>
        Play
        </button>

      <button onClick={() => videoRef.current.pause()}>
        Pause
      </button>
    </div>
  )
}

export default VideoPlayPause