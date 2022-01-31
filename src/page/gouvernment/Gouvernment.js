import './Gouvernment.css';
import StateOfSanAndreas from '../../img/sansandreas.png';
import UnitedStates from '../../img/etats-unis.png';

function Gouvernment() {
    return(
        <div>
            <div className="topGouvernment">
                <img src={StateOfSanAndreas} alt=""/>
                <h1>Etat de San Andreas</h1>
                <img src={UnitedStates} alt=""/>
            </div>
            <div className="navGouvernment">
                <p>Annonce gouvernemental</p>
                <p>Aide aux citoyens</p>
                <p>Article de lois</p>
                <p>Annuaire Services gouvernementaux</p>
            </div>
        </div>
    );
}

export default Gouvernment;