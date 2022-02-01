import './Gouvernment.css';
import StateOfSanAndreas from '../../img/sansandreas.png';
import UnitedStates from '../../img/etats-unis.png';
import CivilLaw from "../../component/CivilLaw/CivilLaw";
import RoadLaw from "../../component/RoadLaw/RoadLaw";
import SanAndreasConstitution from "../../component/SanAndreasConstitution/SanAndreasConstitution";
import UnitedStateConstitution from "../../component/UnitedStateConstitution/UnitedStateConstitution";
import {NavLink, Route, Routes} from "react-router-dom";



function Gouvernment() {
    return(
        <div>
            <div className="topGouvernment">
                <img src={StateOfSanAndreas} alt=""/>
                <h1>Etat de San Andreas</h1>
                <img src={UnitedStates} alt=""/>
            </div>
            <div className="navGouvernment">
                <NavLink exact to="/CivilLaw" id={"CivilLaw"}>Code civil</NavLink>
                <NavLink exact to="/RoadLaw" id={"RoadLaw"}>Code de la route</NavLink>
                <NavLink exact to="/SanAndreasConstitution" id={"SanAndreasConstitution"}>Constitution de San Andreas</NavLink>
                <NavLink exact to="/UnitedStateConstitution" id={"UnitedStateConstitution"}>Constitution des États Unis d'Amérique</NavLink>
            </div>
            <div className="displayGouv">
                <Routes>
                    <Route path="/CivilLaw" element={<CivilLaw/>}/>
                    <Route path="/RoadLaw" element={<RoadLaw/>}/>
                    <Route path="/SanAndreasConstitution" element={<SanAndreasConstitution/>}/>
                    <Route path="/UnitedStateConstitution" element={<UnitedStateConstitution/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Gouvernment;