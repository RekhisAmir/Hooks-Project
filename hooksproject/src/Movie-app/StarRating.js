import React from 'react'

const StarRating = ({stars, rate, handleRating}) => {
    const rating = (x) =>{
        let arr = [];
        for (let i=1; i < 5; i++){
            i<x ? arr.push(<span onClick={()=>handleRating(i)} style={{color:"gold", cursor:'pointer'}}>★</span>)
                 :arr.push(<span onClick={()=>handleRating(i)} style={{color:"black", cursor:'pointer'}}>★</span>);
        }
        return arr;
    };
    return (
        <div>
            {rating(stars)}
        </div>
    )
};

export default StarRating
