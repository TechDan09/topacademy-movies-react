import React, { useState } from 'react';
import { Button } from '../Button/';
import {useNavigate} from 'react-router-dom';

const Searchfilter = ({ onSearchSubmit }) => {
	const [searchInput, setSearchInput] = useState('');
	const navigate = useNavigate();
	// const inputRef = useRef()

	const handleSearchInput = (event) => {
		setSearchInput(event.target.value);
	}

	const onSearchFormSubmit = (event) => {
		event.preventDefault();
		navigate(`/?q=${searchInput}`);
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
