// import React, { useState } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import { useState } from "react";
import axios from "axios"

function App() {

  const[entries,setEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericanSales:'',europeSales:'',japanSales:'',otherSales:'',globalSales:''}])


  async function getAllGames(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setEntries(response.data);
    setSearchEntries(response.data);
    console.log(response.data)
  }

  useEffect(() => {
    getAllGames();
  }, [])

  return (
    <div>
     <h1>
       hello world
     </h1>
     <div>
        <SearchBar />
        <DisplayEntries parentEntries = {entries} />
     </div>
    </div>
  );
}

export default App;
