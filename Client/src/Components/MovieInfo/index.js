import React from 'react';
import './MovieInfo.css'
import Genres from '../Genres';

const Index = ({ info }) => {
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
			<p className="director">{info.director}</p>
			<p className="actors">{info.actors}</p>
		</div>
	);
}

export default Index;
