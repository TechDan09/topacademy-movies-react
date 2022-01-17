import React, { useState, useCallback } from 'react';
import MoviesList from '../../components/MoviesList';
import Filter from '../../components/Filter';
import Pagination from "../../components/Pagination";
import useFetch from '../../hooks/useFetch';

const BASE_URL = 'http://localhost:3001/movies?_limit=12';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mainUrl, setMainUrl] = useState('http://localhost:3001/movies?_limit=12');
  const [url, setUrl] = useState(`${mainUrl}`);

  const { data: movies, isLoading, error, totalCount } = useFetch(url);

  //re-set the state of url after changing page number in order to refresh the url
  const onPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
    setUrl(`${mainUrl}&_page=${pageNumber}`);
  }

  const displayMovies = () => {
    if (!error) {
      return isLoading ? <p>Loading...</p> : (
        <>
          <MoviesList movies={movies} />
          <Pagination length={totalCount} onPageChange={onPageHandler} currentPage={currentPage}/>
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
			<Filter onFilterYear={filterYearHandler} onFilterGenre={filterGenreHandler} onFilterSearch={filterSearchHandler}/>
      {displayMovies()}
		</div>
	);
}

export default Index;
