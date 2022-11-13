import React from "react";
import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import { useState } from "react";


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a8fac808';


const App = () => {

    const [movies, setMovies] = useState([])

    async function searchMovies(title) {
        try {
            const response = await fetch(`${API_URL}&s=${title}`)
            const data = await response.json()
            setMovies(data.Search);
        } catch (error) {
            console.log(error);
        }
    }

    // Default onfirstload search
    useEffect(() => {
        searchMovies("Batman");
    }, []);

    return (
        <div className="app">

            <h1>MovieLand</h1>

            <div className="search">

                <input
                    type="text"
                    placeholder="Search for movies" 
                    onChange={(e) => searchMovies(e.target.value)}
                />

                <img src={SearchIcon} alt="search" />
            </div>

            {
                movies?.length > 0 ? (

                    <div className="container">
                        {movies.map((movie, i) => {

                            return (<MovieCard key={i} movie={movie} />)

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

export default App;