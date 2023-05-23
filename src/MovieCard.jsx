import React from 'react';

// file name and functional components must not be same necessarily but it is a good practice
//? {movie1} is called object destructuring
// we can props also but then it would be like props.movie1.Title but with object destructuring, we only have to write movie1.Title
const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;