import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
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
        placeholder="Enter movie name" 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default App;
