import React from 'react';
import './Card.css'
import Image from '../Image'
import MovieInfo from '../MovieInfo'

/**
 * 
 * @param {object} movie
 * @returns movie card
 */
const Card = ({ movie }) => {
	return (
    <div className="card">
      <Image src={movie.posterUrl} alt={movie.title} />
      <MovieInfo info={movie} />
    </div>
	);
}

export default Card;
