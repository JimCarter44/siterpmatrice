import './Home.css';
import Header from "./component/Header/Header";
import EncartLaw from "./img/EncartLaw.jpg";
import EncartPDM from "./img/EncartPDM.jpg";
import EncartDigitalDen from "./img/EncartDigitalDen.jpg";
import EncartLuckyPlucker from "./img/EncartLuckyPlucker.jpg";
import EncartYouTool from "./img/EncartYouTool.jpg";
import EncartDonCountryStorel from "./img/EncartDonCountryStorel.jpg";
import EncartSeaWord from "./img/EncartSeaWord.png";
import EncartUpNAtom from "./img/EncartUpNAtom.jpg";
import EncartBeanMachine from  "./img/EncartBeanMachine.jpg";
import EncartFleeca from "./img/EncartFleeca.jpg";
import PubToilerCleaner from "./img/PubSponsoToilerCleaner.jpg";
import PubProp43 from "./img/PubSponsoProp43.jpg";
import PubEgoChaser from "./img/PubSponsoEgoChaser.jpg";
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
                        <img src={PubToilerCleaner} alt="Toiler Cleaner" className="picturePub"/>
                    </div>
                    <div className="pubBorder">
                        <p>PUBLICITÉ SPONSORISÉE</p>
                        <img src={PubProp43} alt="Prop43" className="picturePub"/>
                    </div>
                    <div className="pubBorder">
                        <p>PUBLICITÉ SPONSORISÉE</p>
                        <img src={PubEgoChaser} alt="EgoChaser" className="picturePub"/>
                    </div>
                </div>
                <div className="randomInsertZone">
                    <Link to="/gouvernment/civillaw"><img src={EncartLaw} alt="Recueil des lois de l'état de San Andreas" className="randomInsert"/></Link>
                    <Link to="/pdm"><img src={EncartPDM} alt="Concession PDM" className="randomInsert"/></Link>
                    <Link to="/digitalden"><img src={EncartDigitalDen} alt="Digital Den" className="randomInsert"/></Link>
                    <Link to="/luckyplucker"><img src={EncartLuckyPlucker} alt="Lucky Plucker" className="randomInsert"/></Link>
                    <Link to="/youtool"><img src={EncartYouTool} alt="YouTool" className="randomInsert"/></Link>

                    <Link to="/doncountrystore"><img src={EncartDonCountryStorel} alt="DonCountryStore" className="randomInsert"/></Link>
                    <Link to="/seaword"><img src={EncartSeaWord} alt="SeaWord" className="randomInsert"/></Link>
                    <Link to="/upnatom"><img src={EncartUpNAtom} alt="UpNAtom" className="randomInsert"/></Link>
                    <Link to="/beanmachine"><img src={EncartBeanMachine} alt="BeanMachine" className="randomInsert"/></Link>
                    <Link to="/fleeca"><img src={EncartFleeca} alt="Fleeca" className="randomInsert"/></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;