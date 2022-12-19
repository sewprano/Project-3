// import React, { useState, useEffect } from 'react';

// function FindBar() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState(null);
//   const [service, setService] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/search/movie?api_key=53010a7ed7cfd6eb2a2578c4cac9659e&query=${query}`
//         );
//         const data = await response.json();
//         setResults(data.results);
//         console.log(data);
//         fetchData2();
//       } catch (error) {
//         setError(error);
//       }
//     };

//     const fetchData2 = async () => {
//       try {
//         const response2 = await fetch(
//           `https://api.themoviedb.org/3/movie/${results[0].id}/watch/providers?api_key=53010a7ed7cfd6eb2a2578c4cac9659e`
//         );
//         const data2 = await response2.json();
//         setService(data2.provider_name);
//         console.log(data2 + "anything");
//         console.log(service);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     if (query.length > 0) {
//       fetchData();
//     }
//   }, [query]);

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <div>
//       <form>
//         <label for="query">Search for a movie:</label>
//         <input
//           type="text"
//           id="query"
//           value={query}
//           onChange={handleChange}
//         />
//       </form>
//       <h1>
//         {service}
//       </h1>
//       {error && <p>Something went wrong: {error.message}</p>}
//       {results.length > 0 && (
//         <ul>
//           {results.map((result) => (
//             <li key={result.id}>
//               {result.title} - Streaming on:{' '}
//               {/* {result.streaming_service.join(', ')} */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default FindBar;