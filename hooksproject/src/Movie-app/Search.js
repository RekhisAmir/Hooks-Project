import React from 'react'
import StarRating from './StarRating'

const Search = ({searchValue, searchRating, handleRating, handleSearch}) => {
    return (
        <div className="header-container">
        <h1>Our movie app</h1>
        <div className="search-container">
            <input type="text" placeholder="Enter your favorite movie..." value={searchValue} onChange={handleSearch}/>
            <StarRating searchRating={searchRating} handleRating={handleRating}/> 
        </div>    
        </div>
    )
}

export default Search
