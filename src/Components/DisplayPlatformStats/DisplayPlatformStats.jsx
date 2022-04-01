import React from "react";
import { Chart } from "react-google-charts";


 const options = {
  title: "My Daily Activities",
  is3D: true,
};


const DisplayPlatformStats = () => {

  // function generateDataFormChart(entries){

  //   console.log(ent);

  //   let filteredGames = entries.filter(game => game.year > 2013);
    
  //   console.log('Filtered Games', filteredGames)

  //   let platforms = filteredGames.map(game =>  {
  //     return game.platform
  //   });

  //   console.log('Platforms', platforms)

    const data = [
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ];

  
  

  return ( 
    <div>
      <h1>Platform By Global Sales in Millions</h1>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default DisplayPlatformStats;
