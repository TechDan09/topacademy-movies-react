import React, { useState, useCallback } from 'react';
import { MoviesList } from '../../components/MoviesList';
import { Filter } from '../../components/Filter';
import { Pagination } from "../../components/Pagination";
import useFetch from '../../hooks/useFetch';

const BASE_URL = 'http://localhost:3001/movies?_limit=12';

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mainUrl, setMainUrl] = useState(BASE_URL);
  const [url, setUrl] = useState(mainUrl);

  const { data: movies, isLoading, error, totalCount } = useFetch(url);

  const onPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
    setUrl(`${mainUrl}&_page=${pageNumber}`);
  }

  const displayMovies = () => {
    if (!error) {
      return isLoading ? <p>Loading...</p> : (
        <>
          <p className='p-5'>Showing {movies.length} of {totalCount} movies</p>
          <MoviesList movies={movies} />
          <Pagination length={totalCount} showing={movies.length} onPageChange={onPageHandler} currentPage={currentPage}/>
        </>
      )
    }
    
    return <p>Unable to fetch movies</p>
  }

  const filterYearHandler = useCallback((yearObj) => {
    const newUrl = `${BASE_URL}&year_gte=${yearObj.from}&year_lte=${yearObj.to}`;
    setMainUrl(newUrl);
    setUrl(newUrl); 
  }, []);

  const filterGenreHandler = useCallback((genre) => {
    const newUrl = `${BASE_URL}&genres_like=${genre}`;
    setMainUrl(newUrl);
    setUrl(newUrl); 
  }, []);

  const filterSearchHandler = useCallback((value) => {
    const newUrl = `${BASE_URL}&q=${value}`;
    setMainUrl(newUrl);
    setUrl(newUrl); 
  }, []);

	return (
		<div>
			<Filter 
        onFilterYear={filterYearHandler} 
        onFilterGenre={filterGenreHandler} 
        onFilterSearch={filterSearchHandler}
      />
      {displayMovies()}
		</div>
	);
}

export default Movies;