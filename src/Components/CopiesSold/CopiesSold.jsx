import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
    ];

const DisplayCopiesSold = ({entries}) => {

    // function generateCopiessold(){
  
    //   console.log(entries);
  
    //   let filteredGames = entries.filter(game => game.year > 2013);
      
    //   console.log('Filtered Games', filteredGames)
  
    //   let platforms = filteredGames.map(game =>  {
    //     return game.platform
    //   });
  
    //   console.log('Platforms', platforms)
  
    //   let distinctPlatform = [...new Set(platforms)]
  
    //   console.log('DistinctPlatform', distinctPlatform)
  
    //   let platformArrays = distinctPlatform.map(platform => {
  
    //     let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);

    //     return [platform, sum]
    // });
      return (
          <div>
              <h1>Total Sales By Platform</h1>
              <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
          </div>
           
  );
}
  export default DisplayCopiesSold;