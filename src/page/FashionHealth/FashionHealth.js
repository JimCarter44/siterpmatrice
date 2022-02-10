import './FashionHealth.css';
import Navigator from "../../component/Navigator/Navigator";
import Header from "../../component/Header/Header";
import {Link} from "react-router-dom";
import EncarYouTool from "../../img/EncartYouTool.jpg";

function FashionHealth() {
    return(
        <div>
            <Navigator value="www.mode-sante.info" />
            <Header />
            <div className="pageExemple">
                <Link to="/youtool">
                    <img src={EncarYouTool} alt="YouTool" className="randomInsert"/>
                    <div className="pageExempleDescript">
                        <h3>YouTool : Tout l'outillage pour tous vos travaux</h3>
                        <p>Rien de plus satisfaisant que de faire ses propres travaux, mais pour les réussirs il vous vos le bon équipement</p>
                        <p>Avec YouTool vous trouverez tout ce qui est necessaire au meilleurs prix, robuste et très efficace,<br/> nos outils sauront toujours vous épauler dans vos projets</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default FashionHealth;