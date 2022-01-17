import React from 'react';
import useFetch from '../../hooks/useFetch';

const BASE_URL = 'http://localhost:3001/movies';

const Genrefilter = ({ onGenreChange }) => {
	const { data } = useFetch(BASE_URL);

	const extractAllGenres = () => {
		return [...new Set(data.flatMap(({genres}) => genres))].sort();
	}
	
	return (
		<fieldset className="genre-filter">
			<p>Genres</p>
			<select name="genres" id="genres" className="genre-dropdown" onChange={onGenreChange}>
				<option value="">Select Genre</option>
				{extractAllGenres().map(genre => <option value={genre} key={genre}>{genre}</option>)}
			</select>
	</fieldset>
	);
}

export default Genrefilter;
