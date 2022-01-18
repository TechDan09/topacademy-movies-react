import React, { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../../components/MoviesList';
import { Filter } from '../../components/Filter';
import { Pagination } from "../../components/Pagination";
import useFetch from '../../hooks/useFetch';

const BASE_URL = 'http://localhost:3001/movies?_limit=12';

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mainUrl, setMainUrl] = useState(BASE_URL);
  const [url, setUrl] = useState(mainUrl);
  //TODO: use object for url and change based on page number

  const [searchParams, setSearchParams] = useSearchParams();

  const { sendRequest, data: movies, isLoading, error, totalCount } = useFetch();

  useEffect(() => {
    const getParams = () => {
      const params = new URLSearchParams(Object.fromEntries([...searchParams])).toString();
      console.log(params);
      if (params.length > 0) {
        const newUrl = `${BASE_URL}&${params}`;
        setMainUrl(newUrl);
        setUrl(newUrl);
      }
    }

    getParams();
    sendRequest(url);
  }, [url, sendRequest, searchParams]);

  const onPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
    setUrl(`${mainUrl}&_page=${pageNumber}`);
  }

  const displayMovies = () => {
    if (error) {
      return <p>Unable to fetch movies</p>
    }
    
    return isLoading ? <p>Loading...</p> : (
      <>
        <p className='p-5'>Showing {movies.length} of {totalCount} movies</p>
        <MoviesList movies={movies} />
        <Pagination length={totalCount} showing={movies.length} onPageChange={onPageHandler} currentPage={currentPage}/>
      </>
    )
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