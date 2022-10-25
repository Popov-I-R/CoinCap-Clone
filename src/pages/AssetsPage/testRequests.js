
import React, { useState, useEffect } from "react";

function GetRequestHooks() {
  const [coins, setcoins] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "x-access-token": "coinrankingf8578fd99a951143edc7ee38782623b8b680181be6137259",
      },
    };
    const limitPage = 25
    fetch(`https://api.coinranking.com/v2/coins?timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${limitPage}&offset=0`, options)
      .then((response) => response.json())
      .then((data) => console.log(data.coins));


  }, []);
  const test = coins 
  console.log(test);
  return (
    <div className="card text-center m-3">
      <div className="card-body"> {coins}</div>
    </div>
  );
}

export { GetRequestHooks };

// TEST request data for main chart  

// import React, { useState, useEffect } from "react";

// function GetRequestHooks() {
//   const [coins, setcoins] = useState(null);

//   useEffect(() => {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "30027b2007mshd40995eb9b5a54ap1361c1jsncf2e7eda5150",
//         "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//       },
//     };
    
//     fetch(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options)
//       .then((response) => response.json())
//       .then((data) => console.log(data.data.history));


//   }, []);
//   const test = coins 
//   console.log(test);
//   return (
//     <div className="card text-center m-3">
//       <div className="card-body"> xexexexe</div>
//     </div>
//   );
// }

// export { GetRequestHooks };
