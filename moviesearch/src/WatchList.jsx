import { Link } from 'react-router-dom';

function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div className="app-container">
      <h1>My Watchlist</h1>
      <div className="movie-results">
        {watchlist.length === 0 ? (
          <p>No movies in your watchlist yet.</p>
        ) : (
          watchlist.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
              <button onClick={() => removeFromWatchlist(movie.imdbID)}>Remove from Watchlist</button>
            </div>
          ))
        )}
      </div>
      <Link to="/">Back to Search</Link>
    </div>
  );
}

export default Watchlist;
