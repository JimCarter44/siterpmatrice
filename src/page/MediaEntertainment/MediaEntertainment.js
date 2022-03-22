import '../MoneyService/MoneyService.css';
import Navigator from "../../component/Navigator/Navigator";
import {Link} from "react-router-dom";
import Header from "../../component/Header/Header";
import EncartLaw from "../../img/EncartLaw.jpg";

function MediaEntertainment() {
    return(
        <div>
            <Navigator value="www.medias-divertissements.info" />
            <Header />
            <div className="pageExemple">
                <Link to="/gouvernment/civillaw">
                    <img src={EncartLaw} alt="Recueil des lois de l'état de San Andreas" className="randomInsert"/>
                    <div className="pageExempleDescript">
                        <h3>Recueil des lois de l'état de San Andreas</h3>
                        <p>"... Nul citoyens doit ignorer la loi ..."</p>
                        <p>Cette phrase peux etre lourde de sens pour les nouveaux arrivants dans notre belle contrée;<br/>c'est pourquoi le gouvernement de San Andréas vous offre ce recueil des lois en vigueur dans notre état.<br/>Vous ne pourrais pas vous plaindre de ne pas avoir été prévenus...</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MediaEntertainment;