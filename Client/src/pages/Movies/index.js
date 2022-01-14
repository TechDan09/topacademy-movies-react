import React, { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList';
import Filter from '../../components/Filter';
import Pagination from "../../components/Pagination";

const BASE_URL = 'http://localhost:3001/movies?_limit=12';

const Index = () => {
	const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    async function fetchMoviesHandler() {
      setIsLoading(true);
      setHasError(false);
      setTotalCount(0);

      try {
        const response = await fetch(`${BASE_URL}&_page=${currentPage}`);

        if(!response.ok){
          throw new Error('Error');
        }
        
        const data = await response.json();
        setTotalCount(response.headers.get('X-Total-Count'));
        setMovies(data);
      }
      catch (error) {
        setMovies([]);
        setHasError(true);
      }

      setIsLoading(false);
    }
    
    fetchMoviesHandler();
  }, [currentPage]);

  const onPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const displayMovies = () => {
    if (!hasError) {
      return isLoading ? <p>Loading...</p> : (
        <>
          <MoviesList movies={movies} />
          <Pagination length={totalCount} onPageChange={onPageHandler} currentPage={currentPage}/>
        </>
      )
    }
    return <p>Unable to fetch movies</p>
  }

	return (
		<div>
			<Filter />
      {displayMovies()}
		</div>
	);
}

export default Index;
