import { useState, useEffect, useRef } from "react"

const useFetch = (url, options) => {
	const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

	//prevents infinite loop by storing options in useRef
	//TODO: look into if the options actually can be changed and we reload
	const newOptions = useRef();
	newOptions.current = options;

	useEffect(() => {
		const fetchMoviesHandler = async () => {
			setIsLoading(true);
			setError(false);
	
			try {
				const response = await fetch(url, newOptions.current);
	
				if(!response.ok){
					throw new Error('Error');
				}
				
				const data = await response.json(); 
				setTotalCount(response.headers.get('X-Total-Count'));
				setData(data);
			}
			catch (error) {
				setData([]);
				setError(true);
			}
			
			setIsLoading(false);
		}
	
		fetchMoviesHandler();
  }, [url]);

	return { data, isLoading, error, totalCount }
}

export default useFetch;