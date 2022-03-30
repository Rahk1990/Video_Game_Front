import React, { useState } from 'react';

import { useState } from "react";

function App() {

  const[entries,setEntries] = useState([{rank:'',name:'',platform:'',year:'',genre:'',publisher:'',northAmericanSales:'',europeSales:'',japanSales:'',otherSales:'',globalSales:''}])

  return (
    <div>
     <h1>
       hello world
     </h1>
    </div>
  );
}

export default App;
