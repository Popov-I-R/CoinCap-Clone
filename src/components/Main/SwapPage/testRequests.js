// TESTS request data for main table
// import React, { useState, useEffect } from "react";

// function GetRequestHooks() {
//   const [coins, setcoins] = useState(null);

//   useEffect(() => {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "6fafbe14b1msh81df16087bb16cep128f9fjsn1e20ef49b467",
//         "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//       },
//     };
//     const limitPage = 10
//     fetch(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${limitPage}&offset=0`, options)
//       .then((response) => response.json())
//       .then((data) => setcoins(data.data.coins[0].name));


//   }, []);
//   const test = coins 
//   console.log(test);
//   return (
//     <div className="card text-center m-3">
//       <div className="card-body"> {coins}</div>
//     </div>
//   );
// }

// export { GetRequestHooks };

// TEST request data for main chart  

import React, { useState, useEffect } from "react";

function GetRequestHooks() {
  const [coins, setcoins] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "30027b2007mshd40995eb9b5a54ap1361c1jsncf2e7eda5150",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    
    fetch(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options)
      .then((response) => response.json())
      .then((data) => console.log(data.data.history));


  }, []);
  const test = coins 
  console.log(test);
  return (
    <div className="card text-center m-3">
      <div className="card-body"> xexexexe</div>
    </div>
  );
}

export { GetRequestHooks };
