import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {

    const [movie, setMovie] = useState({})

    const params = useParams()

    useEffect(() => {
        getMovie(params.movieName)
    }, [params.movieName])

    async function getMovie(id){
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}`)
            const data = await response.json()
            console.log(data);

            setMovie(data)

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>{movie.Title}</div>
    )
}

export default Movie;