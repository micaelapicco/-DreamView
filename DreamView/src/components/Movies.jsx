import { useEffect, useState } from "react";
import { fetchMovies } from "../services/movies";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
  }, []);

  const MoviesList = movies.map((movie) => (
    <article className="Movie" key={movie.id}>
      <h2>{movie.title}</h2>
      <img src={movie.poster}></img>
      <button className="buyTicket">Comprar Ticket</button>
    </article>
  ));

  return (
    <>
      {movies.length === 0 && <h1>No pude traer las peliculas</h1>}
      {movies && MoviesList}
    </>
  );
}
export default Movies;

// App
// - Movies
// - Carousel
