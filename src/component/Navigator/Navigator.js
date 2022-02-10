import './Navigator.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
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
                <Link to="/"><FontAwesomeIcon icon={faHome} className="homeButton"/></Link>
            </div>
            <input type="text" className="searchBar" defaultValue={props.value}/>
            <div className="hiddenNav">
                <Link to="/pdm" className="pdmLink"/>
                <Link to="/" className="homeLink"/>
                <Link to="/gouvernment/civillaw" className="civilLawLink"/>
                <Link to="/gouvernment/roadlaw" className="roadLawLink"/>
                <Link to="/gouvernment/sanandreasconstitution" className="saConstitutionLink"/>
                <Link to="/gouvernment/unitedstateconstitution" className="usConstitutionLink"/>
            </div>
        </div>
    );
}

export default Navigator;