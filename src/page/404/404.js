import './404.css';
import Navigator from "../../component/Navigator/Navigator";
import EyeFindLogo from '../../img/Eyefind.info-GTA4.png';

function FourHundredFour() {
    return(
        <div>
            <Navigator value="www.404.info" />
            <div className="oups">
                <img src={EyeFindLogo} alt="eyeFindLogo"/>
                <h1>Oups !</h1>
                <p>la page que vous cherchez n'existe pas...</p>
            </div>

        </div>
    );
}

export default FourHundredFour;