import Statistics from "../../Reusable/Statistics";

export default function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <Statistics emogi="🗓">{movie.Year}</Statistics>
      </div>
    </li>
  );
}
