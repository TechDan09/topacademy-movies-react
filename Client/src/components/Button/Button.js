import React from 'react';
import './Button.css'

const Button = ({ style, children, className, onClick }) => {
	return (
		<button 
			className={`btn rounded-border-0 ${className}`} 
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
