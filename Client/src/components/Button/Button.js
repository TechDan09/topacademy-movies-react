import React from 'react';
import './Button.css'

const Button = ({ style, children, className }) => {
	return (
		<button className={`btn rounded-border-0 ${className}`} style={style}>{children}</button>
	);
}

export default Button;
