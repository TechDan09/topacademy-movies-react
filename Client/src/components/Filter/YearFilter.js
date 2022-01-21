import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

const Yearfilter = () => {
	const fromInput = useRef();
	const toInput = useRef();
	const navigate = useNavigate();

	const onYearFormSubmit = (event) => {
		event.preventDefault();
		navigate(`/?year_gte=${fromInput.current.value}&year_lte=${toInput.current.value}`)
	}

	return (
		<form onSubmit={onYearFormSubmit}>
			<fieldset className="year-filter">
				<p>Movie Year</p>
				<label htmlFor="from">from </label>
				<input type="number" id="from" name="from" className="from-input" ref={fromInput}/>
				<span> - </span>
				<label htmlFor="to">to </label>
				<input type="number" id="to" name="to" className="to-input" ref={toInput} />
				<Button style={{backgroundColor: 'var(--dark-background)', width: '100%'}}>Apply</Button>
			</fieldset>		
		</form>
	);
}

export default Yearfilter;
