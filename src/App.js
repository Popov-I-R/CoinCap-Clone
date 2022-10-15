import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter >

      <div className="App">
        <Header />
        <div className="App-main">
          <Routes>
            <Route path='*' element={<div>Error</div>} />
            <Route path='/' element={
              <div >
                Home
              </div>}
            />
            <Route path='/home' element={<Navigate to="/" replace />} />
            <Route path='/exchanges' element={<div></div>} />
            <Route path='/swap' element={<div></div>} />
          </Routes>
        </div>
        <Footer />
      </div>

    </BrowserRouter>


  );
}

export default App;
