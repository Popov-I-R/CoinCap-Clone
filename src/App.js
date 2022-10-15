import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='*' element={<div>Error</div>}/>
            <Route path='/' element={
              <div className="App">
                Home
              </div>} 
              />
            <Route path='/home' element={<Navigate to="/" replace />}/>
            <Route path='/exchanges' element={<div></div>}/>
            <Route path='/swap' element={<div></div>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">

    //   </header>
    //   <main className="App-main">

    //   </main>
    //   <footer className="App-footer">

    //   </footer>
    // </div>

  );
}

export default App;
