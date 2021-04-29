import React from 'react'
import { Link } from 'react-router-dom'

const Info = ({data,match}) => {
    let movie = data.find(item => {item.name===match.params.name});
    return (
       
        <div>
           <h3>{movie.name}</h3>
           <h3>{movie.date}</h3>
           <h3>{movie.description}</h3>
           <button className="btn">
           <Link to='/'>go back</Link>
           </button>
           
        </div>
    )
}

export default Info
