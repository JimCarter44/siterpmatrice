import './Gouvernment.css';
import StateOfSanAndreas from '../../img/sansandreas.png';
import UnitedStates from '../../img/etats-unis.png';
import CivilLaw from "../../component/CivilLaw/CivilLaw";
import RoadLaw from "../../component/RoadLaw/RoadLaw";
import SanAndreasConstitution from "../../component/SanAndreasConstitution/SanAndreasConstitution";
import UnitedStateConstitution from "../../component/UnitedStateConstitution/UnitedStateConstitution";



function Gouvernment() {
    return(
        <div>
            <div className="topGouvernment">
                <img src={StateOfSanAndreas} alt=""/>
                <h1>Etat de San Andreas</h1>
                <img src={UnitedStates} alt=""/>
            </div>
            <div className="navGouvernment">
                <p>Code civil</p>
                <p>Code de la route</p>
                <p>Constitution de San Andreas</p>
                <p>Constitution des États Unis d'Amérique</p>
            </div>
            <div className="displayGouv">
                <CivilLaw />
                <RoadLaw/>
                <SanAndreasConstitution/>
                <UnitedStateConstitution/>
            </div>
        </div>
    );
}

export default Gouvernment;