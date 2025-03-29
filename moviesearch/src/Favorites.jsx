import { Link } from 'react-router-dom';

function Favorites({ favorites }) {
  return (
    <div className="app-container">
      <h1>My Favorite Movies</h1>
      <div className="movie-results">
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))
        )}
      </div>
      <Link to="/">Back to Search</Link>
    </div>
  );
}

export default Favorites;
