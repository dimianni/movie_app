import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieList from './Pages/MovieList/MovieList'
import Movie from './Pages/Movie/Movie'

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<MovieList />} />
            <Route path='/movie/:movieName' element={<Movie />} />
            <Route path='/searched/:searchedMovie' element={<MovieList />} />
        </Routes>
    )
}

export default Pages;