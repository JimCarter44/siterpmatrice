import '../MoneyService/MoneyService.css';
import Navigator from "../../component/Navigator/Navigator";
import Header from "../../component/Header/Header";
import {Link} from "react-router-dom";
import EncartPDM from "../../img/EncartPDM.jpg";

function TravelTransport() {
    return(
        <div>
            <Navigator value="www.voyages-transports.info" />
            <Header />
            <div className="pageExemple">
                <Link to="/pdm">
                    <img src={EncartPDM} alt="Concession PDM" className="randomInsert"/>
                    <div className="pageExempleDescript">
                        <h3>Premium Deluxe MotorSport</h3>
                        <p>Obtenez votre véhicule au meilleur prix !</p>
                        <p>De la petite compact à la berline famillial,<br/>du pure sang sport au van de vos rêves, comptant ou à crédit, peux importe votre budget<br/>Vous trouverez votre bonheur dans notre catalogue plus fournis que le derrière des pornstars de l'île...</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default TravelTransport;