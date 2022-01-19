import React from 'react';
import './Button.css'

const Button = ({ name, style }) => {
	return (
		<button className='btn rounded-border-0' style={style}>{name}</button>
	);
}

export default Button;
