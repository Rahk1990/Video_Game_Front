import React from "react";
import { Chart } from "react-google-charts";


 const options = {
  title: "Console Sales in Millions Since 2013",
  is3D: true,
};

const DisplayPlatformStats = ({entries}) => {

  function generateDataFormChart(){

    console.log(entries);

    let filteredGames = entries.filter(game => game.year > 2013);
    
    let platforms = filteredGames.map(game =>  {
      return game.platform
    });

    console.log('Platforms', platforms)

    let distinctPlatform = [...new Set(platforms)]

   let platformArrays = distinctPlatform.map(platform => {

   let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);



      let sum = 0;

      for(let i = 0; i < allGamesForPlatform.length; i++){
        sum += allGamesForPlatform[i].globalSales
      }


      
      return [platform, sum]
    });

    
    const data = [
      ["Task", "Hours per Day"],
      ...platformArrays
    ];

    console.log('Data', data)

    return data;
  }

  return (
    <div>
      <h1>Platform By Global Sales in Millions Since 2013</h1>
      <Chart
      chartType="PieChart"
      data={generateDataFormChart()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default DisplayPlatformStats;
