import { useEffect, useRef, useState } from "react";

function PreviousValue() {

  const [count, setCount] = useState(0);

  const previous = useRef();

  useEffect(() => {
    previous.current = count;
  }, [count]);

  return (
    <>
      <h2>Current : {count}</h2>

      <h2>Previous : {previous.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default PreviousValue;