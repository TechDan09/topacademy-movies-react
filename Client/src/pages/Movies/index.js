import React, { useState } from 'react';
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

  const onFilterYearHandler = (yearObj) => {
    const newUrl = `${BASE_URL}&year_gte=${yearObj.from}&year_lte=${yearObj.to}`;
    setMainUrl(newUrl);
    setUrl(newUrl); 
  }

	return (
		<div>
			<Filter onFilterYear={onFilterYearHandler} />
      {displayMovies()}
		</div>
	);
}

export default Index;
