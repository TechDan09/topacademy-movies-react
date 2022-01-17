import React from 'react';
import './Filter.css'
import Genrefilter from './GenreFilter';
import Searchfilter from './SearchFilter';
import Yearfilter from './YearFilter';

const Filter =  ({ onFilterYear, onFilterGenre, onFilterSearch }) => {

	console.log('component mount');

	const handleYearFilter = (yearObj) => {
		onFilterYear(yearObj)
	}

	const handleGenreInput = (event) => {
		onFilterGenre(event.target.value);
	}

	const handleSearchInput = (value) => {
		onFilterSearch(value);
	}

	return (
		<div className="filter rounded-border-1 d-flex justify-center gap-1">
			<Yearfilter onYearSubmit={handleYearFilter} />
			<Genrefilter onGenreChange={handleGenreInput}/>
			<Searchfilter onSearchSubmit={handleSearchInput}/>			
		</div>
	);
}

export default React.memo(Filter);