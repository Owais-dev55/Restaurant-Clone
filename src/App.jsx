import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "./layout/GeneralLayout";
import Hometwo from "./pages/Hometwo";
import Hometwolayout from "./layout/Hometwolayout";
import Homethreelayout from "./layout/Homethreelayout";
import Homethree from "./pages/Homethree";
import Homeone from "./pages/Homeone";
import Reservation from ".pages/Reservation.jsx"
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
          <Route path="/reservation" element={<Reservation />} />
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
