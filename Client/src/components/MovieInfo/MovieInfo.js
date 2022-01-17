import React from 'react';
import './MovieInfo.css'
import { Genres } from '../Genres';

const MovieInfo = ({ info }) => {
	return (
		<div className="movie-info">
			<p className="title">{info.title}</p>
			<div className="movie-details d-flex gap-1">
				<p className="year">{info.year}</p>
				<p className="runtime">{info.runtime} Minutes</p>
			</div>
			<ul className="genre d-flex gap-1">
				<Genres genres={info.genres} />
			</ul>
			<p className="director">Director: {info.director}</p>
			<p className="actors">Actors: {info.actors}</p>
		</div>
	);
}

export default MovieInfo;
