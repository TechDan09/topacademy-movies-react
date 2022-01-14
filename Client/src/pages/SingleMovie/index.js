import React, { useEffect, useState } from 'react';
import './SingleMovie.css';
import { Link, useParams } from 'react-router-dom';
import Image from '../../components/Image';
import MovieInfo from '../../components/MovieInfo';

const BASE_URL = 'http://localhost:3001/movies';

const Index = () => {
	const { id } = useParams();
	const [singleMovie, setSingleMovie] = useState({});
	const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

	useEffect(() => {
    async function fetchMoviesHandler() {
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await fetch(`${BASE_URL}?id=${id}`);

        if(!response.ok){
          throw new Error('Error');
        }
        
        const data = await response.json();
				console.log(data);
        setSingleMovie(data[0]);
      }
      catch (error) {
        setSingleMovie([]);
        setHasError(true);
      }

      setIsLoading(false);
    }
    
    fetchMoviesHandler();
		console.log(id);
  }, [id]);

	if (hasError) {
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
						<Link 
							className='btn rounded-border-0'
							to="/">
							Back
						</Link>
						<a className='btn rounded-border-0' href={imdbUrl} target="_blank" style={{'backgroundColor': '#cc0000'}} rel="noreferrer">
							View On Imdb
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Index;
