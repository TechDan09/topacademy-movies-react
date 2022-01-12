import React from 'react';
import './Filter.css'

const Filter = () => {
	return (
		<div className="filter rounded-border-1 d-flex justify-center gap-1">
			<fieldset className="year-filter">
				<p>Movie Year</p>
				<label htmlFor="from">from</label>
				<input type="number" id="from" name="from" className="from-input" />
				<span> - </span>
				<label htmlFor="to">to</label>
				<input type="number" id="to" name="to" className="to-input" />
				<button className="rounded-border-0 year-btn">APPLY</button>
			</fieldset>

			<fieldset className="genre-filter">
				<p>Genres</p>
				<select name="genres" id="genres" className="genre-dropdown">
					<option value="">Select Genre</option>
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
