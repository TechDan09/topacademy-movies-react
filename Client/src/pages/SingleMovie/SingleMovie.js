import React from 'react';
import './SingleMovie.css';
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../../api';
import { Image } from '../../components/Image';
import { MovieInfo } from '../../components/MovieInfo';
import { Button } from '../../components/Button';

const api = new Api('http://localhost:3001/movies');

const SingleMovie = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	
	const getMovie = async ({ queryKey }) => {
		return await api.getData(`/?id=${queryKey[1]}`);
	}
	
	const {data, isLoading, error } = useQuery(["movie", id], getMovie);
	const singleMovie = data ? data.items[0] : {};

	if (error) {
    return <p>Unable to fetch movie</p>
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
