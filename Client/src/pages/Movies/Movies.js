import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../../components/MoviesList';
import { Filter } from '../../components/Filter';
import { Pagination } from "../../components/Pagination";
import { useQuery } from 'react-query';
import axios from 'axios';

//TODO: research on react context
//TODO: research on typescript

const api = axios.create({
  baseURL: "http://localhost:3001/movies?_limit=12" 
});

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams('');

  const fetchMovies = async () => {
		const response = await api.get('/', { params: Object.fromEntries([...searchParams])});
		return {
      items: response.data,
      count: response.headers['x-total-count']
    }
	}

  const {data, isLoading, error} = useQuery(["movies", ...searchParams], fetchMovies);

	const movies = data ? data.items : [];
  const totalCount = data ? data.count : 0;

  const onPageHandler = (pageNumber) => {
    let currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...currentParams, _page: pageNumber });
    setCurrentPage(pageNumber); 
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

	return (
		<div>
			<Filter />
      {displayMovies()}
		</div>
	);
}

export default Movies;