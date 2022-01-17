import React, { useState, useCallback } from 'react';
import MoviesList from '../../components/MoviesList';
import Filter from '../../components/Filter';
import Pagination from "../../components/Pagination";
import useFetch from '../../hooks/useFetch';

const BASE_URL = 'http://localhost:3001/movies?_limit=12';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const url = `${BASE_URL}&_page=${currentPage}`;
  
  const { data, isLoading, error, totalCount } = useFetch(url);

  const onPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const displayMovies = () => {
    if (!error) {
      return isLoading ? <p>Loading...</p> : (
        <>
          <MoviesList movies={data} />
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
