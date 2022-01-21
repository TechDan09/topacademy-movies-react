import React, { useRef } from 'react';
import { Button } from '../Button/';
import {useNavigate} from 'react-router-dom';

const Searchfilter = () => {
	const navigate = useNavigate();
	const searchInput = useRef();

	const onSearchFormSubmit = (event) => {
		event.preventDefault();
		navigate(`/?q=${searchInput.current.value}`)
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
					ref={searchInput}
					placeholder="search by title, genre, cast"
				/>
				<Button style={{backgroundColor: 'var(--dark-background)', width: '100%'}}>Search</Button>
			</fieldset>
		</form>
	);
}

export default Searchfilter;
