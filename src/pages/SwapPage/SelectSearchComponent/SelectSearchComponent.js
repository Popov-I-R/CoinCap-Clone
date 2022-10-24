import React, { useState } from "react";
import "./SelectSearchComponent.css";
import SelectSearch from "react-select-search";

const SelectSearchComponent = ({ focus, blur }) => {
  
  const [value, setValue] = useState("");
  
  let fakeOptions = [
    {
      uuid: "Qwsogvtv82FCd",
      symbol: "BTC", // za arr
      name: "Bitcoin", // za arr
      color: "#f7931A", // za arr
      iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg", // za arr
      marketCap: "367904651022",
      price: "19177.88890978937",
      change: "0.15",
      rank: 1,
      volume: "26251389928",
    },
    {
      uuid: "razxDUgYGNAdQ",
      symbol: "ETH",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "123456.2000810831187",
      change: "-0.96",
      rank: 111,
      volume: "8383280048",
    },
    {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET1H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "3456.2000810831187",
      change: "-0.96",
      rank: 11431,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET2H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "4596.2000810831187",
      change: "-0.96",
      rank: 112111,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET52H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "96.2000810831187",
      change: "-0.96",
      rank: 112321,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ETfsdH",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "16.2000810831187",
      change: "-0.96",
      rank: 123211,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ETadH",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "129.2000810831187",
      change: "-0.96",
      rank: 1123321,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET1212H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "196.2000810831187",
      change: "-0.96",
      rank: 112312311,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET2343H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "296.2000810831187",
      change: "-0.96",
      rank: 11123211111,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET11123H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "12196.200023223810831187",
      change: "-0.96",
      rank: 1134341,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET2133121312H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "1295656.2000810831187",
      change: "-0.96",
      rank: 1112321,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET1111H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "121296.2000810831187",
      change: "-0.96",
      rank: 11111111,
      volume: "8383280048",
    }, {
      uuid: "razxDUgYGNAdQ",
      symbol: "ET321H",
      name: "Ethereum",
      color: "#3C3C3D",
      iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      marketCap: "158147399041",
      price: "12496.2000810831187",
      change: "-0.96",
      rank: 1312412341211,
      volume: "8383280048",
    },
  ];


  const mySwapOptions = [{ name: "All coins",
      type: "group",
      items:[] }];
  for(let i=0; i<fakeOptions.length; i++){
    mySwapOptions[0].items.push({name:fakeOptions[i].symbol, value:`${fakeOptions[i].rank}`})
  }

  return (
    <div className="select-search-box">
      <div style={{ margin: "0 auto", maxWidth: 200 }}>
        <SelectSearch
          className="select-search"
          options={mySwapOptions}
          value={value}
          onChange={setValue}
          onFocus={focus}
          onBlur={blur}
          search
          placeholder="Сhoose..."
        />
        
      </div>
    </div>
  );
};
export default SelectSearchComponent;
