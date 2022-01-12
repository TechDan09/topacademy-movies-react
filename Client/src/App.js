import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import Filter from './Components/Filter';

// const movie = {
//   id: 1,
//   title: 'Beetlejuice',
//   year: '1988',
//   runtime: '92',
//   genres: ['Comedy', 'Fantasy'],
//   director: 'Tim Burton',
//   actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
//   plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
//   posterUrl:
//     'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg'
// }

const BASE_URL = 'http://localhost:3001/movies?_page=1&_limit=12';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  async function fetchMoviesHandler() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setMovies(data);
  }

  return (
    <>
      <Filter />
      <div className='movies d-grid justify-center gap-1'>
        {movies.map(
          movie => <Card key={movie.id} movie={movie} />
        )}
      </div>
    </>
  );
}

export default App;
