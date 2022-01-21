import React from 'react';
import './Filter.css'
import Genrefilter from './GenreFilter';
import Searchfilter from './SearchFilter';
import Yearfilter from './YearFilter';

const Filter =  () => {

	return (
		<div className="filter rounded-border-1 d-flex justify-center gap-1">
			<Yearfilter />
			<Genrefilter />
			<Searchfilter />			
		</div>
	);
}

export default Filter;