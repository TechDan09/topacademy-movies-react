import React, { useState } from 'react';
import Button from '../Button';

const Searchfilter = ({ onSearchSubmit }) => {
	const [searchInput, setSearchInput] = useState('');

	const handleSearchInput = (event) => {
		setSearchInput(event.target.value);
	}

	const onSearchFormSubmit = (event) => {
		event.preventDefault();
		onSearchSubmit(searchInput);
	}

	return (
		<form onSubmit={onSearchFormSubmit}>
			<fieldset className="search-filter">
				<p>Search</p>
				<input
					type="text"
					name="search"
					id="search"
					className="search-input"
					onChange={handleSearchInput}
					placeholder="search by title, genre, cast"
				/>
				<Button style={{backgroundColor: 'var(--dark-background)', width: '100%'}}>Search</Button>
			</fieldset>
		</form>
	);
}

export default Searchfilter;
