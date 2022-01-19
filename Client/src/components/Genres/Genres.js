import React from 'react';
import './Genres.css'

const Genres = ({ genres }) => {
	return (
		<>
			{genres.map(
				genre => <li key={genre} className="rounded-border-0 movie-genre">{genre}</li>
			)}
		</>
	);
}

export default Genres;