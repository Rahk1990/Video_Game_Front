import React, { useState, useEffect  } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import axios from "axios"
import "./App.css"
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';


function App() {

  const[entries, setEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericaSales:null ,europeSales:'',japanSales:'',otherSales:'',globalSales:''}])
  const[searchedEntries, setSearchEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericaSales:null,europeSales:'',japanSales:'',otherSales:'',globalSales:''}])
  // const [videoGames, setVideoGames] = useState([]);



  async function getAllGames(){
    debugger;
    let response = await axios.get('https://localhost:7260/api/Games');
    setEntries(response.data);
    setSearchEntries(response.data);
    console.log(response.data)
  }

  const searchGames = (searchEntries) => {
    console.log(searchEntries)
    let gameMatch = entries.filter((games) => {
      if(games.name.toLowerCase().includes(searchEntries.toLowerCase())){
        return true
        
      }
      else return false
    }
    )
    console.log(gameMatch)
    setEntries(gameMatch)
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
        <div className='border-box'>
        <SearchBar searchGames = {searchGames} />
       </div>
        <div>
        <DisplayEntries parentEntries = {entries} />
        </div>
        <div>
          <DisplayPlatformStats entries = {entries}/>
        </div>
     </div>
    </div>
  );
}


export default App;
