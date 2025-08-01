// src/App.jsx

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

// Layouts
import GeneralLayout from "./layout/GeneralLayout";
import Hometwolayout from "./layout/Hometwolayout";
import Homethreelayout from "./layout/Homethreelayout";

import Hometwo from "./pages/Hometwo";
import Homethree from "./pages/Homethree"; 
import Homeone from "./pages/Homeone";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Reservation from "./pages/Reservation.jsx"
      import Blog from "./pages/Blog";
      import Gallery from "./pages/Gallery";
      import BlogDetails from "./pages/BlogDetails";

import { Shop }  from './components/Shop'; 
import { Menu } from './components/Menu';
import { ShopDetails } from './components/ShopDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        
        {/* Home-two Layout */}
        <Route element={<Hometwolayout />}>
          <Route path="/" element={<Hometwo />} />
        </Route>

        <Route element={<GeneralLayout />}>
          <Route path="/home-1" element={<Homeone />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/home-1/shop/:id" element={<ShopDetails />} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:memberId" element={<TeamDetails />} />    
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog-detail/:id" element={<BlogDetails />} />
        </Route>

        {/* home-three Layout */}
        <Route element={<Homethreelayout />}> 
          <Route path="/home-3" element={<Homethree />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
