import './MediaEntertainment.css';
import Navigator from "../../component/Navigator/Navigator";
import EncartPDM from "../../img/EncartPDM.jpg";
import {Link} from "react-router-dom";

function MediaEntertainment() {
    return(
        <div>
            <Navigator value="www.medias-divertissements.info" />
            <Link to="/lstoday"><img src={EncartPDM} alt="Concession PDM" className="randomInsert"/></Link>
        </div>
    );
}

export default MediaEntertainment;