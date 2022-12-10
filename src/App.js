import React from "react";
import Pages from './Pages';
import Search from './components/Search'
import './App.css';
import { BrowserRouter } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Search />
            <Pages />
        </BrowserRouter>
    )
}

export default App;