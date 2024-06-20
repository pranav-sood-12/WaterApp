import React from 'react';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import WaterForm from './components/WaterForm';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/water_report" element={<WaterForm/>} />
        <Route path="/forms" element={<WaterForm/>} />
      </Routes>
      <Footer/>
    </Router>
  );  
}

export default App;