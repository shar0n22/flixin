import { useState, useEffect } from 'react';
// import axios from 'axios';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
// const API_URL = 'http://www.omdbapi.com/?apikey=306015b3';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=306015b3';

// const movie1 = {
//     "Title": "Spiderman",
//     "Year": "2010",
//     "imdbID": "tt1785572",
//     "Type": "movie",
//     "Poster": "N/A"
// }

// App is the main functional component
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <div className='app'>
            <h1>Flixin</h1>
            <div className='search'>
                <input
                    placeholder='Search for Movies'
                    // value="Superman"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {/* open a dynamic block of code and only render the movie card if atleast 1 movie is found ie greater than 0*/}

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {/* <MovieCard movie1={movie1[0]} /> */}
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                )
                : (
                    <div className='empty'>
                        <h2>No Movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;
// we have to export every single one of our component so that we can call it from somewhere else
