// src/App.jsx

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

// Layouts
import GeneralLayout from "./layout/GeneralLayout";
import Hometwolayout from "./layout/Hometwolayout";
import Homethreelayout from "./layout/Homethreelayout";

// Pages
import Hometwo from "./pages/Hometwo";
import Homethree from "./pages/Homethree";
import Homeone from "./pages/Homeone";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";


function App() {
  return (
    <div className="App">
      <Routes>
        
        {/* Home-two Layout */}
        <Route element={<Hometwolayout />}>
          <Route path="/" element={<Hometwo />} />
        </Route>

        {/* General Layout - All your new pages go here */}
        <Route element={<GeneralLayout />}>
          <Route path="/home-1" element={<Homeone />} />
          
          {/* ==> 2. ADD THE ROUTES FOR YOUR NEW PAGES HERE */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:memberId" element={<TeamDetails />} /> 
          
        </Route>

        {/* home-three Layout */}
        <Route element={<Homethreelayout />}> 
          <Route path="/home-3" element={<Homethree  />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;