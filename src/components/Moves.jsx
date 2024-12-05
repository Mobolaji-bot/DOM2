import {useState} from 'react'

const Moves = () => {
const [moves, setMoves] = useState({
    title: "The backFlip",
    rating: 8
});

const rat = () => setMoves({...moves, rating:10})



  return (
    <section>
        <h1>{moves.title}</h1>
        <p>{moves.rating}</p>
        <button onClick={rat}>Change rating</button>
    </section>
  )
}

export default Moves
