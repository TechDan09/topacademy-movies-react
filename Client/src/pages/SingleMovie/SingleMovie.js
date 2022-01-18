import React, { useEffect } from 'react';
import './SingleMovie.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from '../../components/Image';
import { MovieInfo } from '../../components/MovieInfo';
import useFetch from '../../hooks/useFetch';
import { Button } from '../../components/Button';

const BASE_URL = 'http://localhost:3001/movies';

const SingleMovie = () => {
	const { id } = useParams();
	const url = `${BASE_URL}?id=${id}`;
	const navigate = useNavigate();

	const { sendRequest, data, isLoading, error } = useFetch();
	const singleMovie = data[0];

	useEffect(() => {
		sendRequest(url);
	}, [sendRequest, url]);

	if (error) {
    return <p>Unable to fetch movies</p>
	}

	if (isLoading) {
		return <p>Loading...</p>
	}

	const imdbUrl = `https://www.imdb.com/find?q=${singleMovie.title}`;

	return (
		<>
			<div className="single-movie d-flex gap-1">
				<div className="single-movie-image">
					<Image src={singleMovie.posterUrl} />
				</div>
				<div>
					<MovieInfo info={singleMovie} />
					<p className="plot p-5">
						{singleMovie.plot}
					</p>
					<div className='d-flex p-5 gap-1'>
						<Button 
							onClick={() => navigate(-1)}>
							Back
						</Button>
						<a 
							className='btn rounded-border-0' 
							href={imdbUrl} 
							target="_blank" 
							style={{'backgroundColor': '#cc0000'}} 
							rel="noreferrer">
							View On Imdb
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default SingleMovie;
