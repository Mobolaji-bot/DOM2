import {useState, useEffect} from 'react'

const Effect = () => {
const [value, setValue] = useState(() =>{
    const initialValue = 0
    return initialValue
})
const [something, setSomething] = useState(() =>{
    const initialSomething = 0
    return initialSomething
})

useEffect(() => {
    console.log("hello")
    document.title = `Increment ${value}`
}, [value, something])

const add =() => {
    const addNum = value + 1
    setValue(addNum)
}
const some = () => {
    const addSom = something + 1
    setSomething(addSom)
}

  return (
    <section>
      <h1>{value}</h1>
      <button onClick={add}>Add</button>
      <button onClick={some}>something</button>
    </section>
  );
}

export default Effect
