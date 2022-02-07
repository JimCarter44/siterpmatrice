import './Gouvernment.css';
import StateOfSanAndreas from '../../img/sansandreas.png';
import UnitedStates from '../../img/etats-unis.png';
import {NavLink} from "react-router-dom";
import Navigator from "../Navigator/Navigator";



function Gouvernment() {
    return(
        <div>
            <Navigator value="www.recueildesloisetatsanandreas" />
            <div className="topGouvernment">
                <img src={StateOfSanAndreas} alt=""/>
                <h1>Recueil des lois<br/>de l'État de San Andreas</h1>
                <img src={UnitedStates} alt=""/>
            </div>
            <div className="navGouvernment">
                <NavLink to="/gouvernment/civillaw" className="navLinkCss">Code civil</NavLink>
                <NavLink to="/gouvernment/roadlaw" className="navLinkCss">Code de la route</NavLink>
                <NavLink to="/gouvernment/sanandreasconstitution" className="navLinkCss">Constitution de San Andreas</NavLink>
                <NavLink to="/gouvernment/unitedstateconstitution" className="navLinkCss">Constitution des États Unis d'Amérique</NavLink>
            </div>
        </div>
    );
}

export default Gouvernment;