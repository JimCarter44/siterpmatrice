import './Gouvernment.css';
import StateOfSanAndreas from '../../img/sansandreas.png';
import UnitedStates from '../../img/etats-unis.png';
import CivilLaw from "../../component/CivilLaw/CivilLaw";
import RoadLaw from "../../component/RoadLaw/RoadLaw";
import SanAndreasConstitution from "../../component/SanAndreasConstitution/SanAndreasConstitution";
import UnitedStateConstitution from "../../component/UnitedStateConstitution/UnitedStateConstitution";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";



function Gouvernment() {
    return(
        <div>
            <div className="topGouvernment">
                <img src={StateOfSanAndreas} alt=""/>
                <h1>Recueil des lois<br/>de l'État de San Andreas</h1>
                <img src={UnitedStates} alt=""/>
            </div>
            <BrowserRouter>
                <div className="navGouvernment">
                    <NavLink exact to="/" className="navLinkCss">Code civil</NavLink>
                    <NavLink exact to="/RoadLaw" className="navLinkCss">Code de la route</NavLink>
                    <NavLink exact to="/SanAndreasConstitution" className="navLinkCss">Constitution de San Andreas</NavLink>
                    <NavLink exact to="/UnitedStateConstitution" className="navLinkCss">Constitution des États Unis d'Amérique</NavLink>
                </div>
                <div className="displayGouv">
                    <Routes>
                        <Route path="/" element={<CivilLaw/>}/>
                        <Route path="/RoadLaw" element={<RoadLaw/>}/>
                        <Route path="/SanAndreasConstitution" element={<SanAndreasConstitution/>}/>
                        <Route path="/UnitedStateConstitution" element={<UnitedStateConstitution/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Gouvernment;