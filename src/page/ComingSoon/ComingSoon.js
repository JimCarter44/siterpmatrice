import './ComingSoon.css'
import Navigator from "../../component/Navigator/Navigator";
import EyeFindLogo from "../../img/Eyefind.info-GTA4.png";


function ComingSoon() {
    return(
        <div>
            <Navigator value="www.comingsoon.info" />
            <div id="coming">
                <img src={EyeFindLogo} alt="eyefindinfo"/>
                <h1>Coming Soon</h1>
            </div>
        </div>
    );
}

export default ComingSoon;