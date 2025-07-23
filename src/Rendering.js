import React from 'react'
import "./App.css"
const Rendering = (props) => {
    const{data}= props;
    console.log("what is come in data",data);
  return (
    <table> 
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Rank</th>
             <th>Image</th>

             <th>Symbol</th>
             <th>Current-Price</th>
             
             <th>Total Supply</th> 
             <th>Lowest in 24h</th>
             <th>Highest in 24h</th>
          </tr>
        </thead>
    {
      data && data.map((item,index)=>(
        <tr key={index}>
             
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.market_cap_rank}</td>
              <td><img src={item.image} alt={`${item.symbol}`} width='100px' height='50px'></img></td>
              <td>{item.symbol}</td>
              <td>{item.current_price}</td>
              <td>{item.total_supply}</td>
              <td>{item.low_24h}</td>
              <td>{item.high_24h}</td>
             
        </tr>
      ))
    }

</table>
  )
}

export default Rendering