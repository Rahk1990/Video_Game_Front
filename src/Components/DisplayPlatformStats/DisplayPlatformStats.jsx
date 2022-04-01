import React from "react";
import { Chart } from "react-google-charts";


 const options = {
  title: "My Daily Activities",
  is3D: true,
};

const DisplayPlatformStats = ({entries}) => {

  function generateDataFormChart(){

    console.log(entries);

    let filteredGames = entries.filter(game => game.year > 2013);
    
    console.log('Filtered Games', filteredGames)

    let platforms = filteredGames.map(game =>  {
      return game.platform
    });

    console.log('Platforms', platforms)

    let distinctPlatform = [...new Set(platforms)]

    console.log('DistinctPlatform', distinctPlatform)

    let platformArrays = distinctPlatform.map(platform => {
      
      let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);

      // now we need to loop through allGamesForPlatform and sum each games global sales
      // Once we have the sum of all of those games global sales
      
      return [platform, 10]
    });

    console.log('Platform Arrays', platformArrays)

    const data = [
      ["Task", "Hours per Day"],
      ...platformArrays
    ];

    console.log('Data', data)

    return data;
  }

  return (
    <div>
      <h1>Platform By Global Sales in Millions</h1>
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
