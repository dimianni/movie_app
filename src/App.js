import React from "react";
import Pages from './Pages';
import Search from './components/Search'
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";


const App = () => {

    const [query, setQuery] = useState('')

    return (
        <BrowserRouter>
            <Search onQuery={setQuery} />
            <Pages query={query} />
        </BrowserRouter>
    )
}

export default App;