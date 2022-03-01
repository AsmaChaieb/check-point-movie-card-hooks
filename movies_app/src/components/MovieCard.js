import React from 'react'
import StarRatingComponent from 'react-star-rating-component' ;

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/>


const MovieCard = ({movie}) => 
{

    return (
    
            <div className='card'>
                <div><h1 className='titre'> {movie.Title}</h1></div>
                <div><img className='image' src={movie.PosterURL} /> </div> <hr/>
                <div><p className='descrip'>{movie.Description}</p></div>  <hr/>
                <div> <h2 className='rate'>  
                <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={movie.Rating} />
            </h2> </div>

            </div> 
        )
}

export default MovieCard