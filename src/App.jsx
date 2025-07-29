import React from "react";
import './App.css';
import { Menu } from './components/Menu';
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "./layout/GeneralLayout";
import Hometwo from "./pages/Hometwo";
import Hometwolayout from "./layout/Hometwolayout";
import Homethreelayout from "./layout/Homethreelayout";
import Homethree from "./pages/Homethree";
import Homeone from "./pages/Homeone";

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
