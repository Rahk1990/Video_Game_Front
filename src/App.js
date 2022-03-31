import React, { useState, useEffect  } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import axios from "axios"
import "./App.css"
import EntriesChartTracker from './Components/EntriesChartTracker';


function App() {

  const[entries, setEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericaSales:null ,europeSales:'',japanSales:'',otherSales:'',globalSales:''}])
  const[searchedEntries, setSearchEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericaSales:null,europeSales:'',japanSales:'',otherSales:'',globalSales:''}])
  const[searchedChartEntries, setSearchChartEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericaSales:null,europeSales:'',japanSales:'',otherSales:'',globalSales:''}])


  async function getAllGames(){
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

  const chartEntries = (searchChartEntries) => {
    console.log(searchChartEntries)
    let gameMatch = entries.filter(function(el){
      if(el.globalSales.Math.max() && el.Year >= 2013){
        return true
      }
      else return false
    }
    )
    
    console.log(gameMatch)
    setSearchChartEntries(gameMatch)
  };

  

  // const chartEntries = (searchedChartEntries) => {
  //   console.log(searchedChartEntries)
  //   let chartEntry = entries.fil()
  // }
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
          <EntriesChartTracker parentEntries ={chartEntries}/>
        </div>
     </div>
    </div>
  );
}


export default App;
