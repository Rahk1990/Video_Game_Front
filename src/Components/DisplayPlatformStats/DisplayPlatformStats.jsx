import React from 'react';
import { Chart } from "react-google-charts"
 


const DisplayPlatformStats = ({videoGames}) => {
  
  function drawChart() {
  
    console.log('Video Games', videoGames)
  
    let filteredGames = videoGames.filter(game => game.years >= 2013);
  
    console.log('Filtered Games', filteredGames)
  
    const platforms = filteredGames.map(game => {
      return game.platform
    });
  
    console.log('Platforms', platforms)
  
    const distinctPlatforms = [...new Set(platforms)]
  
    const platformArrays = distinctPlatforms.map(platformName => {
      
      const gamesForPlatform = filteredGames.filter(game => game.platform ==platformName);
  
      //Loop over gamesForPlatform and sum each games global sales together
  
      //We then take that sum
      
      
      return [platformName, 10]
  });

    return(
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="piechart_3d" style="width: 900px; height: 500px;"></div>
  </body>
</html>

  }
  
  export default DisplayPlatformStats;
  // var data = google.visualization.arrayToDataTable([
  //   ['Platform', 'Global Sales'],
  //   ...platformArrays];
  //      ]);