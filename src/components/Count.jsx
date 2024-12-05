import {useState} from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  const incrimination = () => setCount(count + 1)
  const discrimination = () => setCount(count -1)


  return (
    <section>
      <h1>{count}</h1>
      <button onClick={incrimination}>+</button>
      <button onClick={discrimination}>-</button>
    </section>
  );
}

export default Count
 