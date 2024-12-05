import {useState, useEffect} from 'react'

const Book = () => {
const [book, setBook] = useState({
  author: "Michael",
  title: "samurai",
});

 useEffect (() => {
    console.log(book)
})


const tit = () =>{
    const titNum = {...book, title:"john"}
    setBook(titNum)
}


  return (
   <section>
    <h1>{book.author}</h1>
    <p>{book.title}</p>
    <button onClick={tit}>Change title</button>
   </section>
  )
}

export default Book
