import './Gouvernment.css';
import StateOfSanAndreas from '../../img/sansandreas.png';
import UnitedStates from '../../img/etats-unis.png';
import {Link} from "react-router-dom";
import Navigator from "../Navigator/Navigator";



function Gouvernment() {
    return(
        <div>
            <Navigator value="www.recueildesloisetatsanandreas.info" />
            <div className="topGouvernment">
                <img src={StateOfSanAndreas} alt=""/>
                <h1>Recueil des lois<br/>de l'État de San Andreas</h1>
                <img src={UnitedStates} alt=""/>
            </div>
            <div className="navGouvernment">
                <Link to="/gouvernment/civillaw" className="navLinkCss">Code civil</Link>
                <Link to="/gouvernment/roadlaw" className="navLinkCss">Code de la route</Link>
                <Link to="/gouvernment/sanandreasconstitution" className="navLinkCss">Constitution de San Andreas</Link>
                <Link to="/gouvernment/unitedstateconstitution" className="navLinkCss">Constitution des États Unis d'Amérique</Link>
            </div>
        </div>
    );
}

export default Gouvernment;