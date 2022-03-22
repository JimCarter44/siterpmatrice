import './Navigator.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import $ from "jquery";

function Navigator(props) {
    $(function () {
        let searchBarValue = $(".searchBar");
        let pdmURL = "www.premuimdeluxemotorsport.info";
        let homeURL = "www.eyefind.info";
        searchBarValue.change(function () {
            console.log("Testchange");
            console.log(pdmURL);
            console.log(searchBarValue.val());
            if (searchBarValue.val() === pdmURL) {
                console.log("validation");
                window.location.href = "/pdm";
            }
            else if (searchBarValue.val() === homeURL) {
                console.log("validation");
                window.location.href = "/";
            }
        });
    });
    $(function () {
        let back = $(".backButton");
        back.click(function () {
            window.history.back();
        })
        let next = $(".nextButton");
        next.click(function () {
            window.history.forward();
        })
    });
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