import {useState} from 'react'

const Numbers = () => {
const [randomNumber, setRandomNumber] = useState(() =>{
   const initialCount = 10
   return initialCount
})

const cli = () => {
    const newNum = Math.floor(Math.random() * 100);
    setRandomNumber(newNum)
}

  return (
    <section>
      <h1>Random Number:{randomNumber}</h1>
      <button onClick={cli}>Click</button>
    </section>
  );
}

export default Numbers
