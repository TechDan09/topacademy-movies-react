import React from 'react';
import './Button.css'

const Button = ({ style, children }) => {
	return (
		<button className='btn rounded-border-0' style={style}>{children}</button>
	);
}

export default Button;
