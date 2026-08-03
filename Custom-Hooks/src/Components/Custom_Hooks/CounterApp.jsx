import useCounter from "./useCounter"

function CounterApp() {

    const {count, increment, decrement} = useCounter();
  return (
    <div>
        <h3>Counter App</h3>
        <h4>Count: {count}</h4>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default CounterApp