import React, { useState, useEffect  } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import axios from "axios"
import "./App.css"
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';
import DisplayCopiesSold from './Components/CopiesSold/CopiesSold';
import NaSales from './Components/NaSales/NaSales';
import DisplayPlatformStats2 from './Components/DisplayPlatformStats2/DisplayPlatformStats2';
import NaSales2 from './Components/NaSales2/NaSales2';

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
       OVERLY LONG VIDEO GAME CHART THAT <h1>USE TO</h1>LOAD SLOWLY *until David showed we were loading the whole list unnecessarily. 
     </h1>
       <div>
        <div className='custome'>
          <SearchBar searchGames={searchGames} />
       </div>
       
       <div className='custome'>
          <DisplayEntries selectGame={selectGame} parentEntries={searchedEntries} />
          </div>
        </div>
        <div>
       <div className='custome' >
         <DisplayCopiesSold selectedGame={selectedGame} entries={entries} />
         </div>
       </div>
        <div className='parent'>
          <div className='custome'>
            <div>
              <DisplayPlatformStats2 entries={entries} />
            </div>
            <div className='custome'>
              <DisplayPlatformStats entries={entries}/>
            </div>
            <div>
              <NaSales2 entries= {entries} />
            </div>
            <div className='custome'>
              <NaSales entries = {entries} />
            </div>
          <div className='child'>
          </div>
        </div>
        </div>
       
     </div>
  );
}
export default App;
