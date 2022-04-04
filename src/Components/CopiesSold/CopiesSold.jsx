import React from "react";
import { Chart } from "react-google-charts";


const DisplayCopiesSold = ({entries}) => {

    function generateCopiesSold(){

        console.log(entries);

        let platforms = entries.map(game => {
            return game.globalSales
        });
      
        console.log('Platforms', platforms)

        let distinctPlatforms = [...new Set(platforms)]

        console.log('Distinct Platform', distinctPlatforms)

        // let copiesSold = entries.map(copies => {
        //     return copies.globalSales

        // });

        // let distinctCopiesSold = [...new Set(copiesSold)]

        // let copiesArrays = distinctCopiesSold.map(moreCopies => {
        //     return [moreCopies]
        // });
      
        // let copiesSold = entries.filter.globalSales

        let platformArrays = distinctPlatforms.map(platform => {
            return ["globalSales", platform, "aqua"]
        });

        console.log('Platform Arrays', platformArrays)

       

        const data = [
            ["Element", "Sales", { role: "style" }],
           ...platformArrays
            ];

            console.log('Data', data)

            return data;
    }
  
  
//       let filteredByPlatform = entries.filter(game => game.platform);
      
//       console.log('Filtered By Platform', filteredByPlatform)
  
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
              <Chart chartType="ColumnChart" width="100%" height="400px" data={generateCopiesSold()} />
          </div>
           
  );
}

  export default DisplayCopiesSold;