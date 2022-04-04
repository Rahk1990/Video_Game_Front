import React from "react";
import { Chart } from "react-google-charts";


 const options = {
  title: "Recent (2015 to current) Console North American Sales in Millions",
  is3D: true,
};

const NaSales = ({entries}) => {

  function generateNaSales(){

    console.log(entries);

    let filteredGames = entries.filter(game => game.year > 2015);
    
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
      // let totalSales = allGamesForPlatform.map(game => {
      //   return game.globalSales.reduce
      // })

      let sum = 0;

      for(let i = 0; i < allGamesForPlatform.length; i++){
        sum += allGamesForPlatform[i].northAmericaSales
      }

      // let sumFromOneLiner = filteredGames.filter(game => game.platform == platform).map(game => game.globalSales).reduce((curNum, nexNum) => a + b, 0);

      // let allGlobalSales = allGamesForPlatform.map(game => {
      //   return game.globalSales
      // });

      // let sumFromReduce = allGlobalSales.reduce((curVal, nexVal) => curVal + nexVal, 0);


      // Once we have the sum of all of those games global sales
      
      return [platform, sum]
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
      <h1>Platform By North American Sales Since 2015 (Sales in Millions)</h1>
      <Chart
      chartType="PieChart"
      data={generateNaSales()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default NaSales;
