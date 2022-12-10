import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard'


const MovieList = () => {

    const [movies, setMovies] = useState([])

    const params = useParams()

    async function searchMovies(title) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${title}`)
            const data = await response.json()
            console.log(data);
            setMovies(data.Search);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(params.searchedMovie);

        if (params.searchedMovie) {
            searchMovies(params.searchedMovie);
        } else {
            searchMovies("Batman");
        }

    }, [params.searchedMovie]);

    return (
        <div className="app">
            {
                movies?.length > 0 ? (

                    <div className="container">
                        {movies.map((movie, i) => {

                            return (
                                <Link key={i} to={`/movie/${movie.imdbID}`}>
                                    <MovieCard movie={movie} />
                                </Link>
                            )

                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }


        </div>
    )
}

export default MovieList;