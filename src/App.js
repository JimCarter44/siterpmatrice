import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import CivilLaw from "./page/CivilLaw/CivilLaw";
import RoadLaw from "./page/RoadLaw/RoadLaw";
import SanAndreasConstitution from "./page/SanAndreasConstitution/SanAndreasConstitution";
import UnitedStateConstitution from "./page/UnitedStateConstitution/UnitedStateConstitution";
import PDM from "./page/PDM/PDM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gouvernment/civillaw" element={<CivilLaw />} />
          <Route path="/gouvernment/roadlaw" element={<RoadLaw />} />
          <Route path="/gouvernment/sanandreasconstitution" element={<SanAndreasConstitution />} />
          <Route path="/gouvernment/unitedstateconstitution" element={<UnitedStateConstitution/>} />
          <Route path="/pdm" element={<PDM />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
