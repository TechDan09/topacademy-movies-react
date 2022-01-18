import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

const BASE_URL = 'http://localhost:3001/movies';

const Genrefilter = ({ onGenreChange }) => {
	const { sendRequest, data } = useFetch();

	useEffect(() => {
		sendRequest(BASE_URL);
	}, [sendRequest]);

	const extractAllGenres = () => {
		return [...new Set(data.flatMap(({genres}) => genres))].sort();
	}
	
	return (
		<fieldset className="genre-filter">
			<p>Genres</p>
			<select name="genres" id="genres" className="genre-dropdown" onChange={onGenreChange}>
				<option value="">Select Genre</option>
				{extractAllGenres().map((genre, index) => <option value={genre} key={index}>{genre}</option>)}
			</select>
		</fieldset>
	);
}

export default Genrefilter;
