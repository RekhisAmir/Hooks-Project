import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({serie}) => {
    return (
        <div className="movie-list">
           {serie.map((el) =>(
            <MovieCard elt={el}/>
           ) ) }
            
        </div>
    )
}

export default MovieList
