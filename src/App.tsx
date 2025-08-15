import { useEffect, useState } from 'react';
import './App.css';

interface Movie {
  id: number;
  title: string;
  year: number;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('/movies') 
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP erraor! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setMovies(data))
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  return (
    <div className="App">

      <h1>PBL6: Movie Ticket App</h1>
      {movies.length === 0 ? (
        <p>Loading movies...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title} ({movie.year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;