import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter((prevCount) => prevCount + 1)
  }

  const sub = () => {
    setCounter((prevCount) => prevCount - 1)
  }

  useEffect(() => {
    setCounter(100);
  }, []);

  useEffect(() => {
    // alert(`value of the counter is ${counter}`)
  }, [counter]);

  return (
    <>
      {counter}
      <button onClick={sub}>-</button>
      <button onClick={add}>+</button>
    </>
  )
}

export default Counter