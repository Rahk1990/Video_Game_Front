import React, { useState, useEffect  } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import axios from "axios"
import "./App.css"
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';
import DisplayCopiesSold from './Components/CopiesSold/CopiesSold';
import NaSales from './Components/NaSales/NaSales';
import NaSales2 from './Components/NaSales2/NaSales2';
import DisplayPlatformStats2 from './Components/DisplayPlatformStats2/DisplayPlatformStats2';



function App() {

  const[entries, setEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericaSales:null ,europeSales:'',japanSales:'',otherSales:'',globalSales:''}])
  const[searchedEntries, setSearchEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericaSales:null,europeSales:'',japanSales:'',otherSales:'',globalSales:''}])

  const [selectedGame, setSelectedGame] = useState({name: ''});
 
  async function getAllGames(){
    // debugger;
    let response = await axios.get('https://localhost:7260/api/Games');
    setEntries(response.data);
    console.log(response.data)
  }

  const selectGame = (game) => {
    setSelectedGame(game);
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
    setSearchEntries(gameMatch)
  };

   
  useEffect(() => {
    getAllGames();

  }, [])

  return (
    <div className='page-background'>
     <h1>
       OVERLY LONG VIDEO GAME CHART THAT <h1>USED TO</h1>LOAD SLOWLY UNTIL DAVID SHOWED US NOT TO LOAD THE WHOLE LIST EVERYTIME 
     </h1>
       <div>
        <div className='border-box'>
          <SearchBar searchGames={searchGames} />
       </div>
       <div>
         <DisplayCopiesSold selectedGame={selectedGame} entries={entries} />
         </div>
       </div> 
       <div>
         <DisplayPlatformStats2 entries={entries} />
       </div>
        <div>
          <DisplayPlatformStats entries={entries}/>
        </div>
        <div>
          <NaSales2 entries = {entries} />
        </div>
        <div>
          <NaSales entries = {entries} />
        </div>
        <div>
          <DisplayEntries selectGame={selectGame} parentEntries={searchedEntries} />
        </div>
        
     </div>
    
  );
}


export default App;
