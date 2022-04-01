import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchEntries, setSearchEntries] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        props.searchGames(searchEntries)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchEntries} onChange={(e) => setSearchEntries(e.target.value)} type='text' placeholder='Search...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar