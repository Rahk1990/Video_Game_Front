import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchEntries, setSearchEntries] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        props.searchGames(searchEntries)
    }

    function globalSales(){
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchEntries} onChange={(e) => setSearchEntries(e.target.value)} type='text' placeholder='Search...'></input>
                <button type='submit'>Search</button>
                <button onClick={globalSales}>GlobalSales</button>

                
            </form>
        </div>
    )
    
}

export default SearchBar