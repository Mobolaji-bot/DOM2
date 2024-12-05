
import {useState, useEffect} from 'react'

const CountEffect = () => {
const [count, setCount] = useState(() =>{
    const initialCount = 10
    return initialCount
})

const add = () => {
    const addNum = count + 1
    setCount(addNum)
}

useEffect (() => {
    console.log("what up")
    document.title = `Increment ${count}`
})

  return (
  <section>
    <h1>Count: {count}</h1>
    <button onClick={add}>add</button>
  </section>
  )
}

export default CountEffect
 