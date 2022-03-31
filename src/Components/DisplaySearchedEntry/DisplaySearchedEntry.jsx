const DisplaySearchedEntry = (props) => {
    return ( 
        <div className="border-box">
        <table>
        <thead>
          <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Platform</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Publisher</th>
          <th>North American Sales</th>
          <th>Europe Sales</th>
          <th>Japan Sales</th>
          <th>Other Sales</th>
          <th>Global Sales</th>

          </tr>
        </thead>
        <tbody>
          {props.gameMatch.map((entry, index) => { 
          return (
            <tr key={index}>
                <td>{index + 1 }</td>
                <td>{entry.rank}</td>
                <td>{entry.name}</td>
                <td>{entry.platform}</td>
                <td>{entry.year}</td>
                <td>{entry.genre}</td>
                <td>{entry.northAmericanSales}</td>
                <td>{entry.europeSales}</td>
                <td>{entry.japanSales}</td>
                <td>{entry.otherSales}</td>
                <td>{entry.globalSales}</td>

            </tr>
            );
          })}
          <tr>

          </tr>
        </tbody>
      </table>
                </div>
     );
}
 
export default DisplaySearchedEntry;