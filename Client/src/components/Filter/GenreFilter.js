import React from 'react';
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: "http://localhost:3001/movies" 
});

const Genrefilter = () => {
	const navigate = useNavigate();

	const getGenres = async () => {
		const response = await api.get('/');
		return response.data;
	}

	const { data, isLoading } = useQuery('genres', getGenres);

	const extractAllGenres = () => {
		return [...new Set(data.flatMap(({genres}) => genres))].sort();
	}

	const handleGenreFilter = (event) => {
		if (event.target.value.length === 0) {
			navigate('/');
		} else {
			navigate(`/?genres_like=${event.target.value}`)
		}
	}
	
	return (
		<>
			{
				!isLoading && 
				<fieldset className="genre-filter">
					<p>Genres</p>
					<select name="genres" id="genres" className="genre-dropdown" onChange={handleGenreFilter}>
						<option value="">Select Genre</option>
						{extractAllGenres().map((genre, index) => <option value={genre} key={index}>{genre}</option>)}
					</select>
				</fieldset> 
		}
		</>
	);
}

export default Genrefilter;
