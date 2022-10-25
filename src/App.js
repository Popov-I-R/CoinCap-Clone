import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import Portfolio from "./pages/PortfolioPage/Portfolio";
import Watchlist from "./pages/WatchlistPage/Watchlist";
import Swap from "./pages/SwapPage/Swap";
import Exchanges from "./pages/ExchangesPage/Exchanges";
import Assets from "./pages/AssetsPage/Assets";
import AssetID from "./pages/AssetsPage/test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="FixedHeigthHeader" />
        <div className="App-main">
          <Routes>
            <Route path="*" element={<div>Error</div>} />
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Navigate to="/" replace />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/my-watchlist" element={<Watchlist/>} />
            <Route path="/my-portfolio" element={<Portfolio />} />
            <Route path='/assets' element={<Assets/>}/>
            <Route path='/assets/:assetIdentificator' element={<AssetID/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
