import React from "react";
import { Chart } from "react-google-charts";


const DisplayCopiesSold = ({selectedGame, entries}) => {

    function generateCopiesSold(){

        // halo 3
        // filter all 16000 rows and get the games where the game title eqaul the selected game title
        let copiesSold = entries.filter(game => game.name === selectedGame.name);
        console.log("Copies Sold", copiesSold)

        // take the result of this filter and select (map) the currently looped game's platform and global sales

         let copiesArrays = copiesSold.map(game => {
            return [game.platform, game.globalSales, 'green']
        });

        const data = [
              ["Element", "Sales", { role: "style" }],
            ...copiesArrays
        ];

        console.log('Data', data);

        return data;
          
    }

        
      return (
          <div>
              <h1>Total Sales By Platform</h1>
              <Chart chartType="ColumnChart" width="100%" height="400px" data={generateCopiesSold()} />
          </div>
           
  );
}


  export default DisplayCopiesSold;