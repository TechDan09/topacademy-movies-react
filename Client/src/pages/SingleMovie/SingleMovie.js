import React from 'react';
import './SingleMovie.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from '../../components/Image';
import { MovieInfo } from '../../components/MovieInfo';
import { useQuery } from 'react-query'
import { Button } from '../../components/Button';
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001/movies" 
});

const SingleMovie = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	
	const getMovie = async ({ queryKey }) => {
		const response = await api.get(`/?id=${queryKey[1]}`);
		return response.data
	}
	
	const {data, isLoading, error } = useQuery(["movie", id], getMovie);
	const singleMovie = data ? data[0] : [];

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
