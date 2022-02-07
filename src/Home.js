import './Home.css';
import Header from "./component/Header/Header";
import EncartLaw from "./img/EncartLaw.jpg";
import EncartPDM from "./img/EncartPDM.jpg";
import EncartDigitalDen from "./img/EncartDigitalDen.jpg";
import EncartLuckyPlucker from "./img/EncartLuckyPlucker.jpg";
import {Link} from "react-router-dom";
import Navigator from "./component/Navigator/Navigator";

function Home() {
    return(
        <div>
            <Navigator value="www.eyefind.info" />
            <Header />
            <div className="homeDisplay">
                <div className="randomPub">
                    <div className="pubBorder">
                        <p>PUBLICITÉ SPONSORISÉE</p>
                        <img src="" alt="" className="picturePub"/>
                    </div>
                    <div className="pubBorder">
                        <p>PUBLICITÉ SPONSORISÉE</p>
                        <img src="" alt="" className="picturePub"/>
                    </div>
                    <div className="pubBorder">
                        <p>PUBLICITÉ SPONSORISÉE</p>
                        <img src="" alt="" className="picturePub"/>
                    </div>
                </div>
                <div className="randomInsertZone">
                    <Link to="/gouvernment/civillaw"><img src={EncartLaw} alt="Recueil des lois de l'état de San Andreas" className="randomInsert"/></Link>
                    <Link to="/pdm"><img src={EncartPDM} alt="Concession PDM" className="randomInsert"/></Link>
                    <img src={EncartDigitalDen} alt="Digital Den" className="randomInsert"/>
                    <img src={EncartLuckyPlucker} alt="Lucky Plucker" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                </div>
                <div className="randomInsertZone">
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                </div>
            </div>
        </div>
    );
}

export default Home;