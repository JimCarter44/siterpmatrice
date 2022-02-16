import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import CivilLaw from "./page/CivilLaw/CivilLaw";
import RoadLaw from "./page/RoadLaw/RoadLaw";
import SanAndreasConstitution from "./page/SanAndreasConstitution/SanAndreasConstitution";
import UnitedStateConstitution from "./page/UnitedStateConstitution/UnitedStateConstitution";
import PDM from "./page/PDM/PDM";
import BeanMachine from "./page/BeanMachine/BeanMachine";
import DigitalDen from "./page/DigitalDen/DigitalDen";
import DonCountryStore from "./page/DonCountryStore/DonCountryStore";
import LuckyPlucker from "./page/LuckyPlucker/LuckyPlucker";
import SeaWord from "./page/SeaWord/SeaWord";
import UpNAtom from "./page/UpNAtom/UpNAtom";
import YouTool from "./page/YouTool/YouTool";
import FashionHealth from "./page/FashionHealth/FashionHealth";
import TravelTransport from "./page/TravelTransport/TravelTransport";
import MoneyService from "./page/MoneyService/MoneyService";
import RestaurantBar from "./page/RestaurantBar/RestaurantBar";
import MediaEntertainment from "./page/MediaEntertainment/MediaEntertainment";
import Fleeca from "./page/Fleeca/Fleeca";
import LSToday from "./page/LSToday/LSToday";

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
          <Route path="/beanmachine" element={<BeanMachine />} />
          <Route path="/digitalden" element={<DigitalDen />} />
          <Route path="/doncountrystore" element={<DonCountryStore />} />
          <Route path="/luckyplucker" element={<LuckyPlucker />} />
          <Route path="/seaword" element={<SeaWord />} />
          <Route path="/upnatom" element={<UpNAtom />} />
          <Route path="/youtool" element={<YouTool />} />
          <Route path="/fashionhealth" element={<FashionHealth />} />
          <Route path="/traveltransport" element={<TravelTransport />} />
          <Route path="/moneyservice" element={<MoneyService />} />
          <Route path="/restaurantbar" element={<RestaurantBar />} />
          <Route path="/mediaentertainement" element={<MediaEntertainment />} />
          <Route path="/fleeca" element={<Fleeca />} />
          <Route path="/lstoday" element={<LSToday/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
