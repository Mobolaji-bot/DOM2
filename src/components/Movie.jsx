import {useState} from "react";

const Movie = () => {
const [movie, setMovie] = useState(["Anime", "Shonen"]);
const add = () => setMovie([...movie, "lalala"]);
const rem = () => setMovie(movie.filter((movie) => movie != "Shonen"));
const edit = () => setMovie(movie.map((movie) => movie == "Anime" ? "Anime boy":movie ))




  return (
   <main>
    {movie.map((movie) =>(
        <ul key={Math.random()}>
            <li>{movie}</li>
        </ul>
    ))}
    <button onClick={add}>Add movie</button>
    <button onClick={rem}>Remove</button>
    <button onClick={edit}>edit</button>
   </main>
  )
}

export default Movie;
