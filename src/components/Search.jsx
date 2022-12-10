import React, { useState } from 'react'
import SearchIcon from './search.svg';
import { useNavigate } from 'react-router-dom';


const Search = (props) => {

    const [inputVal, setInputVal] = useState('')


    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${inputVal}`)
    }

    return (
        <div className="search">

            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Search for movies"
                    onChange={(e) => {
                        setInputVal(e.target.value)
                        props.onQuery(e.target.value)
                    }}
                />
            </form>

            <img src={SearchIcon} alt="search" />
        </div>
    )
}

export default Search;