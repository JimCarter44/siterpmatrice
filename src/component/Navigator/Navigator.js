import './Navigator.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight, faHome} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
/*
let searchBarValue = document.getElementsByClassName('searchBar');
let pdmLink = document.getElementsByClassName('pdmLink');
let pdmURL = "www.premuimdeluxemotorsport.com";
searchBarValue.on('change', function () {
    if (searchBarValue.valueOf() === pdmURL.valueOf()) {
        console.log(pdmLink);
    }
});*/

function Navigator(props) {
    return(
        <div className="searchTopBar">
            <div className="bnButton">
                <div className="bnButtonOne">
                    <FontAwesomeIcon icon={faCaretLeft} className="backButton"/>
                </div>
                <div className="bnButtonTwo">
                    <FontAwesomeIcon icon={faCaretRight} className="nextButton"/>
                </div>
            </div>
            <div className="homeZone">
                <NavLink to="/"><FontAwesomeIcon icon={faHome} className="homeButton"/></NavLink>
            </div>
            <input type="text" className="searchBar" defaultValue={props.value}/>
            <div className="hiddenNav">
                <NavLink to="/pdm" className="pdmLink"/>
                <NavLink to="/" className="homeLink"/>
                <NavLink to="/gouvernment/civillaw" className="civilLawLink"/>
                <NavLink to="/gouvernment/roadlaw" className="roadLawLink"/>
                <NavLink to="/gouvernment/sanandreasconstitution" className="saConstitutionLink"/>
                <NavLink to="/gouvernment/unitedstateconstitution" className="usConstitutionLink"/>
            </div>
        </div>
    );
}

export default Navigator;