import React, { useState, useEffect } from 'react';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [currentMovie, setCurrentMovie] = useState([])
  const [streamingService, setStreamingService] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=2b5c8cd3c8faeea5adc03f8eb266473d&query=${query}`
        );
        const data = await response.json();
        setResults(data.results);
        console.log(results)
      } catch (error) {
        setError(error);
      }
    };

    if (query.length > 0) {
      fetchData();
    }
  }, [query]);

  const showService = (event) => {
    let target = event.target.id
    const fetchData2 = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${target}/watch/providers?api_key=53010a7ed7cfd6eb2a2578c4cac9659e`
        );
        const data = await response.json();
        setCurrentMovie(data.results.US.flatrate);
        console.log(currentMovie[0].provider_name)
        if(currentMovie){
          setStreamingService(currentMovie[0].provider_name)
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData2()

  }
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  
return (
    <div>
      <form>
        <label htmlFor="query"></label>
        <input class='search-bar'
          type="text"
          id="query"
          placeholder='-- Search entertainment here --'
          value={query}
          onChange={handleChange}
        />
      </form>
      <div class='result-title-text'>{streamingService}</div>
      {results.length > 0 && (
        <ul class='steaming-results'>
          {results.map((result) => (
            <li class='streaming-results 'key={result.id} >
            <img onClick={showService} id={result.id} src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + result.poster_path}/>
              {/* {result.streaming_service.join(', ')} */}
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}

export default MovieSearch;