import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Button from '../Button';
import './Filter.css'

const BASE_URL = 'http://localhost:3001/movies';

const Filter = ({ onFilterYear, genres }) => {
	const [yearInput, setYearInput] = useState({});
	const [genreInput, setGenreInput] = useState('');

	const { data } = useFetch(BASE_URL);

	const extractAllGenres = () => {
		return [...new Set(data.flatMap(({genres}) => genres))].sort();
	}

	const handleYearInput = (event) => {
		const { name, value } = event.target;

		setYearInput({
			...yearInput,
			[name]: value
		})
	}

	const onFilterYearSubmit = (event) => {
		event.preventDefault();
		onFilterYear(yearInput);
	}

	const handleGenreInput = (event) => {

	}

	return (
		<div className="filter rounded-border-1 d-flex justify-center gap-1">
			<form onSubmit={onFilterYearSubmit}>
				<fieldset className="year-filter">
					<p>Movie Year</p>
					<label htmlFor="from">from </label>
					<input type="number" id="from" name="from" className="from-input" onChange={handleYearInput}/>
					<span> - </span>
					<label htmlFor="to">to </label>
					<input type="number" id="to" name="to" className="to-input" onChange={handleYearInput} />
					<Button style={{backgroundColor: 'var(--dark-background)'}}>Apply</Button>
				</fieldset>		
			</form>
			
			<fieldset className="genre-filter">
				<p>Genres</p>
				<select name="genres" id="genres" className="genre-dropdown" onChange={handleGenreInput}>
					<option value="">Select Genre</option>
					{extractAllGenres().map(genre => <option value={genre} key={genre}>{genre}</option>)}
				</select>
			</fieldset>

			<fieldset className="search-filter">
				<p>Search</p>
				<input
					type="text"
					name="search"
					id="search"
					className="search-input"
					placeholder="search by title, genre, cast"
				/>
			</fieldset>
			<p className="result-count"></p>
		</div>
	);
}

export default Filter;
