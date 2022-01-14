import React from 'react';
import './Image.css'
import fallbackImg from '../../assets/fallback.png'

const Index = ({ src, alt, className }) => {
	return (
		<img 
			src={src}
			loading="lazy" 
			alt={alt} 
			className={className}
			onError={
				(e) => {e.target.src = fallbackImg}
			} 
		/>
	);
}

export default Index;
