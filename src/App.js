import React, { useState, useEffect  } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import axios from "axios"

function App() {

  const[entries,setEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericanSales:'',europeSales:'',japanSales:'',otherSales:'',globalSales:''}])
  const[searchedEntries,setSearchEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericanSales:'',europeSales:'',japanSales:'',otherSales:'',globalSales:''}])


  async function getAllGames(){
    let response = await axios.get('https://localhost:7260/api/Games');
    setEntries(response.data);
    setSearchEntries(response.data);
    console.log(response.data)
  }

  const searchGames = (searchedEntries) => {
    console.log(searchedEntries)
    let gameMatch = entries.filter((song) => {
      if(song.name.toLowerCase().includes(searchedEntries.toLowerCase())){
        return true
        
      }
      else return false
    }
    )
    console.log(gameMatch)
  };

  useEffect(() => {
    getAllGames();
  }, [])

  return (
    <div>
     <h1>
       hello world
     </h1>
     <div>
        <SearchBar searchGames = {searchGames} />
        <DisplayEntries parentEntries = {entries} />
     </div>
    </div>
  );
}

export default App;
