import React, { useState } from 'react';
import axios from 'axios';
// const axios = require("axios");
const streaming = ["netflix", "prime", "disney","hbo", "hulu", "peacock","paramount", "starz", "showtime","apple", "mubi"];
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceTerm, setServiceTerm] = useState(streaming[0]);
  
  const [movie, setMovie] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // const handleServiceChange = (event) => {
  //   setServiceTerm(event.target.value);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a GET request to the movie API using Axios


const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: 'us',
    service: serviceTerm,
    type: 'movie',
    // genre: '18',
    page: '1',
    output_language: 'en',
    language: 'en',
    keyword: searchTerm
  },
  headers: {
    'X-RapidAPI-Key': 'bea4e9f95bmshed32acc7a2e831cp10c452jsn93edbd8ee87b',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  setMovie(response.data.results[0]);
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search for a movie:</label>
      <input
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      <select
        onChange={(e) => setServiceTerm(e.target.value)}
        defaultValue={serviceTerm}
      >
        {streaming.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.posterURLs.original} alt="image" width={200} height= {600}/>
          <p>{movie.overview}</p>
        </div>
      )}
    </form>
  );
};

export default SearchBar;