import './MoneyService.css';
import Navigator from "../../component/Navigator/Navigator";
import EncartLaw from "../../img/EncartLaw.jpg";
import EncartFleeca from "../../img/EncartFleeca.jpg";
import EncartProp43 from "../../img/EncartProp43.jpg";
import {Link} from "react-router-dom";

function MoneyService() {
    return(
        <div>
            <Navigator value="www.argent-services.info" />
            <div className="pageExemple">
                <Link to="/gouvernment/civillaw">
                    <img src={EncartLaw} alt="Recueil des lois de l'état de San Andreas" className="randomInsert"/>
                    <div className="pageExempleDescript">
                        <h3>Recueil des lois de l'état de San Andreas</h3>
                        <p>"... Nul citoyens doit ignorer la loi ..."</p>
                        <p>Cette phrase peux etre lourde de sens pour les nouveaux arrivants dans notre belle contrée;<br/>c'est pourquoi le gouvernement de San Andréas vous offre ce recueil des lois en vigueur dans notre état.<br/>Vous ne pourrais pas vous plaindre de ne pas avoir été prévenus...</p>
                    </div>
                </Link>
                <Link to="/fleeca">
                    <img src={EncartFleeca} alt="Fleeca" className="randomInsert"/>
                    <div className="pageExempleDescript">
                        <h3>Fleeca Bank of San Andreas</h3>
                        <p>Votre argent mérite le meilleur !<br/>Placement à haut rendement, Livret à taux fixe, Frais controlées, pas de question sur l'origine des versements...</p>
                        <p>Avec la Fleeca Bank of San Andreas vous vous sentirez comme en "famille"</p>
                    </div>
                </Link>
                <Link to="/">
                    <img src={EncartProp43} alt="proposition 43" className="randomInsert"/>
                    <div className="pageExempleDescript">
                        <h3>Proposition 43</h3>
                        <p>Dites stop à l'APOCALYPSE</p>
                        <p>La famille nucléaire va créer une apocalypse dans notre société</p>
                        <p>Esprit scarifié par les radiations d'un environnement toxique, enfant bléssés, des annés de thérapie garantie.<br/>Pour les 100 prochaines annés cette structure non naturelle va nous forcer à nous détruire...</p>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default MoneyService;