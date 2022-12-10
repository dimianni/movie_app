import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './Pages/MovieList/MovieList';
import Movie from './Pages/Movie/Movie';

const Pages = ({query}) => {

    return (
        <Routes>
            <Route path='/' element={<MovieList query={query} />} />
            <Route path='/movie/:movieName' element={<Movie />} />
            <Route path='/searched/:searchedMovie' element={<MovieList query={query} />} />
        </Routes>
    )
}

export default Pages;