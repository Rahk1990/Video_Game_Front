import React from "react";
import { Chart } from "react-google-charts";


const DisplayCopiesSold = ({selectedGame, entries}) => {

    function generateCopiesSold(){

        // halo 3
        // filter all 16000 rows and get the games where the game title eqaul the selected game title
        let copiesSold = entries.filter(game => {
            return game.title == selectedGame
        })
        // take the result of this filter and select (map) the currently looped game's platform and global sales




        // console.log(entries);

        // let copiesSold = entries.map(game => {
        //     return game.globalSales
        // });
      
        // console.log('Platforms', copiesSold)

        // let distinctCopiesSold = [...new Set(copiesSold)]

        // console.log('Distinct Platform', distinctCopiesSold)

        // //Variable for Platform
        
       
        // // let platforms = entries.map(game => {
        // //     return game.platform
        // // });

        // // let distinctPlatform = [...new Set (platforms)]

        // // let platFormArrays = distinctPlatform.map(platform => {
        // //     return [platform]
        // // });


        // let copiesArrays = distinctCopiesSold.map(copies => {
        //     return ["globalSales", copies, "aqua"]
        // });

        // console.log('Platform Arrays', copiesArrays)

       

        const data = [
            ["Element", "Sales", { role: "style" }],
           ...copiesArrays
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