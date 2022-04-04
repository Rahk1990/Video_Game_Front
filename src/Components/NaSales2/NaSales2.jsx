import React from "react";
import { Chart } from "react-google-charts";


 const options = {
  title: "2005 to current) Console North American Sales in Millions",
  is3D: true,
};

const NaSales2 = ({entries}) => {

  function generateNaSales2(){

    let filteredGames = entries.filter(game => game.year > 2005);
    
    let platforms = filteredGames.map(game =>  {
      return game.platform
    });

    console.log('Platforms', platforms)

    let distinctPlatform = [...new Set(platforms)]

    let platformArrays = distinctPlatform.map(platform => {

    let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);

      let sum = 0;

      for(let i = 0; i < allGamesForPlatform.length; i++){
        sum += allGamesForPlatform[i].northAmericaSales
      }

      
      return [platform, sum]
    });

    const data = [
      ["Task", "Hours per Day"],
      ...platformArrays
    ];

    return data;
  }

  return (
    <div>
      <h1>Platform By North American Sales Since 2005 (Sales in Millions)</h1>
      <Chart
      chartType="PieChart"
      data={generateNaSales2()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default NaSales2;
