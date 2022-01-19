import React from 'react';
import './Card.css';
import Image from '../Image';
import MovieInfo from '../MovieInfo';
import { Link } from 'react-router-dom';

/**
 * 
 * @param {object} movie
 * @returns movie card
 */
const Card = ({ movie }) => {
  const cardLink = `/single-movie/${movie.id}`
	return (
    <Link to={cardLink}>
      <div className="card">
      <Image src={movie.posterUrl} alt={movie.title} className={'card-img'} />
      <MovieInfo info={movie} />
    </div>
    </Link>
	);
}

export default Card;
