import React, { useState } from 'react';
import DisplayCopiesSold from '../CopiesSold/CopiesSold';


const SearchBar = (props) => {
    const [searchEntries, setSearchEntries] = useState('')

    function searchCopies(){

        DisplayCopiesSold()
        props.DisplayCopiesSold(searchEntries)
        
        
    }

    function handleSubmit(e){
        e.preventDefault()
        props.searchGames(searchEntries)
    }

    // function globalSales(){
        
    // }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchEntries} onChange={(e) => setSearchEntries(e.target.value)} type='text' placeholder='Search...'></input>

                <button type='submit'>Search By Game</button>
                <button type='submit'>Search Sales</button>
                
            </form>
        </div>
    )
    
}

export default SearchBar