import React, { useState } from 'react';
import Button from '../Button';

const Yearfilter = ({ onYearSubmit }) => {
	const [yearInput, setYearInput] = useState({});

	const handleYearInput = (event) => {
		const { name, value } = event.target;

		setYearInput({
			...yearInput,
			[name]: value
		})
	}

	const onYearFormSubmit = (event) => {
		event.preventDefault();
		onYearSubmit(yearInput);
	}

	return (
		<form onSubmit={onYearFormSubmit}>
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
	);
}

export default Yearfilter;
