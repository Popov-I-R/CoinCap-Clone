import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Main/HomePage/Home";
import Portfolio from "./components/Main/PortfolioPage/Portfolio";
import Watchlist from "./components/Main/WatchlistPage/Watchlist";
import Swap from "./components/Main/SwapPage/Swap";
import Exchanges from "./components/Main/ExchagesPage/Exchanges";
import Assets from "./components/Main/AssetsPage/Assets";

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
            <Route path="/my-watchlist" element={<Watchlist />} />
            <Route path="/my-portfolio" element={<Portfolio />} />
            <Route path='/assets' element={<Assets/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
