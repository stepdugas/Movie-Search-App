import { useState } from "react";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Favorites from './Favorites.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c8add343`)
      .then(response => response.json())
      .then(data => setMovies(data.Search))
      .catch(error => console.error(error));
  };

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addToFavorites = (movie) => {
    const isAlreadyFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);
    if (!isAlreadyFavorite) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (imdbID) => {
    const updatedFavorites = favorites.filter(fav => fav.imdbID !== imdbID);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };




  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <h1>Movie Search App</h1>
              <h2>Search for Movies</h2>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Enter movie name"
              />
              <button onClick={handleSearch}>Search</button>

              <div className="movie-results">
                {movies.map(movie => (
                  <div key={movie.imdbID} className="movie-card">
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                    <button onClick={() => addToFavorites(movie)}>Save to Favorites</button>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />

      </Routes>
    </div>
  );

}

export default App;
