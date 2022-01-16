import { useState, useEffect } from "react"

const useFetch = (url, options = {}) => {
	const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
    async function fetchMoviesHandler() {
      setIsLoading(true);
      setError(false);

      try {
        const response = await fetch(url, options);

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
  }, [url, options]);

	return { data, isLoading, error, totalCount }
}