import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faHamburger} from "@fortawesome/free-solid-svg-icons";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons";
import {faShuttleVan} from "@fortawesome/free-solid-svg-icons";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import EyeFindLogo from '../../img/Eyefind.info-GTA4.png';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <header className="headHeader">
                <div className="headTopBar">
                    <div className="upTopBar">
                        <img src={EyeFindLogo} alt="eyeFindLogo"/>
                        <button>ALÉATOIRE</button>
                    </div>
                    <div className="downTopBar">
                        <div className="searchZone">
                            <FontAwesomeIcon icon={faSearch} className="searchIconFont"/>
                        </div>
                        <input type="text" className="searchDownBar"/>
                    </div>
                </div>
                <nav className="navMenu">
                    <Link to="/mediaentertainement"><div className="blockMenu">
                        <FontAwesomeIcon icon={faMobileAlt} className="fontIcon"/>
                        <p>MÉDIAS ET<br/>DIVERTISSEMENTS</p>
                    </div></Link>
                    <Link to="/restaurantbar"><div className="blockMenu">
                        <FontAwesomeIcon icon={faHamburger} className="fontIcon"/>
                        <p>RESTAURANTS<br/>ET BARS</p>
                    </div></Link>
                    <Link to="/moneyservice"><div className="blockMenu">
                        <FontAwesomeIcon icon={faDollarSign} className="fontIcon"/>
                        <p>ARGENT<br/>ET SERVICES</p>
                    </div></Link>
                    <Link to="/traveltransport"><div className="blockMenu">
                        <FontAwesomeIcon icon={faShuttleVan} className="fontIcon"/>
                        <p>VOYAGES<br/>ET TRANSPORTS</p>
                    </div></Link>
                    <Link to="/fashionhealth"><div className="blockMenu">
                        <FontAwesomeIcon icon={faShoppingBag} className="fontIcon"/>
                        <p>MODE<br/>ET SANTÉ</p>
                    </div></Link>
                </nav>
            </header>
        </div>
    );
}

export default Header;