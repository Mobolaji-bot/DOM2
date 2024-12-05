import {useState} from 'react'

const Counter = () => {
const [number, setNumber] = useState(() => {
    const initialCount = 0
    return initialCount
})

const icr = () => {
    const addNum = number + 1
    setNumber(addNum)
}

  return (
    <section>
      <h1>Count: {number}</h1>
      <button onClick={icr}>Add by on e number</button>
    </section>
  );
}

export default Counter
