import React from 'react'
import MovieCard from './MovieCard'

const ListMovies = ({movies,filterMovies}) => {
    return (
        <div className='Container'>
            
        {movies.map(el=> <MovieCard movie={el} />)}

        </div>
    )
    }

export default ListMovies