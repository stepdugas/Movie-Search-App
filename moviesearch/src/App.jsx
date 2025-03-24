import { useState } from "react";
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c8add343`)
      .then(response => response.json()) 
      .then(data => setMovies(data.Search)) 
      .catch(error => console.error(error));
  };


  return (
    <div>
      <h1>Movie Search App</h1>
      <div>
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
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
