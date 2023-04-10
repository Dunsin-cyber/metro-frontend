import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage"
import Building from "./Pages/Building"
import Floors from "./Pages/Floors"
import Units from "./Pages/Units"
import Apartments from "./Pages/Apartments"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/building' element={<Building />} />
        <Route path='/floors' element={<Floors />} />
        <Route path='/units' element={<Units />} />
        <Route path='/apartments' element={<Apartments/>} />




      </Routes>

    </div>
  );
}

export default App;
