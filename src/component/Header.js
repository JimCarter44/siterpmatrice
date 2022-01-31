import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faHamburger} from "@fortawesome/free-solid-svg-icons";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons";
import {faShuttleVan} from "@fortawesome/free-solid-svg-icons";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import EyeFindLogo from '../img/Eyefind.info-GTA4.png';

function Header() {
    return (
        <div className="Header">
            <header className="headHeader">
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
                        <FontAwesomeIcon icon={faHome} className="homeButton"/>
                    </div>
                    <input className="searchBar"/>
                </div>
                <div className="headTopBar">
                    <div className="upTopBar">
                        <img src={EyeFindLogo} alt="eyeFindLogo"/>
                        <button className="randomButton">ALÉATOIRE</button>
                    </div>
                    <div className="downTopBar">
                        <div className="searchZone">
                            <FontAwesomeIcon icon={faSearch} className="searchIconFont"/>
                        </div>
                        <input className="searchDownBar"/>
                    </div>
                </div>
                <nav className="navMenu">
                    <div className="blockMenu">
                        <FontAwesomeIcon icon={faMobileAlt} className="fontIcon"/>
                        <p>MÉDIAS ET<br/>DIVERTISSEMENT</p>
                    </div>
                    <div className="blockMenu">
                        <FontAwesomeIcon icon={faHamburger} className="fontIcon"/>
                        <p>RESTAURANTS<br/>ET BARS</p>
                    </div>
                    <div className="blockMenu">
                        <FontAwesomeIcon icon={faDollarSign} className="fontIcon"/>
                        <p>ARGENT<br/>ET SERVICES</p>
                    </div>
                    <div className="blockMenu">
                        <FontAwesomeIcon icon={faShuttleVan} className="fontIcon"/>
                        <p>VOYAGES<br/>ET TRANSPORTS</p>
                    </div>
                    <div className="blockMenu">
                        <FontAwesomeIcon icon={faShoppingBag} className="fontIcon"/>
                        <p>MODE<br/>ET SANTÉ</p>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;