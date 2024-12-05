
import {useState} from 'react'

const UseState = () => {
const [count, setCount] = useState(() => {
    const initialCount = 10
    return initialCount
})

const incr = () => {
    const addCount = count + 1
    setCount(addCount)
}

  return (
    <section>
      <h1>Count: {count}</h1>
      <button onClick={incr}>Incriminate</button>
    </section>
  );
}

export default UseState
