import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import Portfolio from "./pages/PortfolioPage/Portfolio";
import Watchlist from "./pages/WatchlistPage/Watchlist";
import Swap from "./pages/SwapPage/Swap";
import Exchanges from "./pages/ExchangesPage/Exchanges";
import AssetID from "./pages/AssetsPage/Asset";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import {connection} from "./pages/HomePage/testSocketThree"

function test(connection) {
  connection.onopen = () => {
    const subscriptions = {
      throttle: "10s",
      uuids: ["Qwsogvtv82FCd", "razxDUgYGNAdQ"],
    };
    connection.send(JSON.stringify(subscriptions));
    connection.onmessage = function (msg) {
      let receivedData = JSON.parse(msg.data);
      console.log(receivedData);
    };
  };
}

function App() {

  useEffect(()=> {
    test(connection)
    return ()=> {connection.close()}
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Header className="FixedHeigthHeader" />
        <div className="App-main">
          <Routes>
            <Route path="*" element={<ErrorPage/>} />
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Navigate to="/" replace />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/my-watchlist" element={<Watchlist/>} />
            <Route path="/my-watchlist/assets/:assetIdentificator" element={<AssetID/>} />
            <Route path="/my-portfolio" element={<Portfolio />} />
            <Route path='/assets/:assetIdentificator' element={<AssetID/>}/>
            <Route path='/something-went-wrong' element={<div>404 - Something went wrong</div>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
