import React from 'react'
import StarRatingComponent from 'react-star-rating-component' ;
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/>


const MovieCard = ({movie}) => 
{

    return (
    
            <div className='card'>
               <div> <Link
              to={`/description/${movie.Title}`}
              state={movie.Title}
              style={{ textDecoration: "none" }}
            >
             <h2> {movie.Title}</h2>
            </Link> {" "}  </div> 



                {/* <div><h1 className='titre'> {movie.Title}</h1></div> */}
                <div><img className='image' src={movie.PosterURL}  alt=""/> </div> 
                <div style={{width:"338px" , height:"100%", padding:"0px" ,margin:"0px"}}>
                <p className='descrip'>{movie.Description}</p></div> 
                <div style={{padding:"5px"}}> <h2 className='rate'>  
                <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={movie.Rating} />
            </h2> 
               <Link to={`/description/${movie.Title}`}> 
                <Button>
                trailer
                </Button>
              </Link>
               </div>

            </div> 
        )
}

export default MovieCard