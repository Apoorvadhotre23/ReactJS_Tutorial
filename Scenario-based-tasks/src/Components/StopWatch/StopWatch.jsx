import { useState, useEffect } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);


     useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
        <h3>Stop Watch in ReactJS</h3>
        <h4>{time} seconds</h4>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>

    </div>
  )
}

export default StopWatch