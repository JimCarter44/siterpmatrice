import '../MoneyService/MoneyService.css';
import Navigator from "../../component/Navigator/Navigator";
import {Link} from "react-router-dom";
import Header from "../../component/Header/Header";
import EncartLaw from "../../img/EncartLaw.jpg";
import EncartWeazel from "../../img/EncartWeazel.jpg"

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
            <div className="pageExemple">
                <Link to="/comingsoon">
                    <img src={EncartWeazel} alt="Weazel News" className="randomInsert"/>
                    <div className="pageExempleDescript">
                        <h3>Weazel News - Numéros 1 sur l'info</h3>
                        <p>Tenez vous toujours au courant des informations importantes et sans intérêts de Los Santos</p>
                        <p>En continu, Petites Annonces, StarSystème, Sciences, Crimes... Payez le bon prix pour une info de qualité (de toute façon vu le niveau de la concurrence vous n'avez pas le choix)...</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MediaEntertainment;