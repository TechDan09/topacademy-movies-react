import React from 'react';
import './Image.css'
import fallbackImg from '../../assets/fallback.png'

const Index = ({ src, alt }) => {
	return (
		<img 
			src={src}
			loading="lazy" 
			alt={alt} 
			className='card-img'
			onError={
				(e) => {e.target.src = fallbackImg}
			} 
		/>
	);
}

export default Index;
