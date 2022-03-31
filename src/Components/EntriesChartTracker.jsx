import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts"


const EntriesChartTracker = (props) => {
    
    const [chartData, setChartData] = useState([]);


    useEffect(() => {

        let tempChartData = props.parentEntries.map(entry => {
            return [entry.year, entry.platform, entry.globalSales];
        });
        setChartData(tempChartData);
    }, [props.parentEntries])
    
    return ( 
    <Chart
        chartType="LineChart"
        data={[["Year","Platform", "Global Sales"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
      />
       );
}
 
export default EntriesChartTracker;