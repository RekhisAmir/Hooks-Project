import React from 'react'
import StarRating from './StarRating'
import {Link} from 'react-router-dom'

const MovieCard = ({elt})=>{


    return (
        <div className="movie-card">
            <h3>Rating </h3>
            <StarRating stars={elt.rating}/>
            <img src={elt.image} alt={elt.name}/>
            <h3>{elt.name}</h3>
            <h3>{elt.date}</h3>
            <button className="btn">
            <Link to={`/Info/${elt.name}`}>Description</Link>
            </button>
        </div>
    )
}

export default MovieCard
