 import React, { useEffect, useState } from 'react'
import Rendering from './Rendering';
 
 const App = () => {
  const[data,setData] = useState([]);

  useEffect( ()=>{
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false').then(res=>res.json()).then(data=>{
             setData(data);
     });
      
  },[])

  console.log("what is come in data",data);

   return (
     <div>
      <Rendering data={data}></Rendering>
     </div>
   )
 }
 
 export default App