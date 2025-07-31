import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';
import Footer from "./components/Footer";
import GeneralLayout from "./layout/GeneralLayout";
import Hometwo from "./pages/Hometwo";
import Hometwolayout from "./layout/Hometwolayout";
import Homethreelayout from "./layout/Homethreelayout";
import Homethree from "./pages/HomeThree";
import Homeone from "./pages/Homeone";
import { ShopDetails } from './components/ShopDetails';
import {Shop }  from './components/Shop'; 


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home-two Layout */}
        <Route element={<Hometwolayout />}>
          <Route path="/" element={<Hometwo />} />
        </Route>

        {/* General Layout */}
        <Route element={<GeneralLayout />}>
          <Route path="/home-1" element={<Homeone />} />
          <Route path="/home-1/menu" element={<Menu />} />
          <Route path="/home-1/shop/:id" element={<ShopDetails />} />
          <Route path="home-1/shop" element={<Shop/>}/>

        </Route>

        {/* Home-three Layout */}
        <Route element={<Homethreelayout />}>
          <Route path="/home-3" element={<Homethree />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
