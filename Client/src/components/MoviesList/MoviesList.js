import React from 'react';
import { Card } from '../Card'
import './Movies.css'

const MoviesList = ({movies}) => {
	return (
		<div className='movies d-grid justify-center gap-1'>
			{movies.map( movie => 
				<Card key={movie.id} movie={movie} /> 
			)}
		</div>
	);
}

export default MoviesList;
