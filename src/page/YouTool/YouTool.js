import './YouTool.css';
import Navigator from "../../component/Navigator/Navigator";
import YoutoolLogo from "../../img/EncartYouTool.jpg";
import Samsung from "../../img/YouToolImg/samsung.png"
import Watch from "../../img/YouToolImg/apple-watch.png"

function YouTool() {
    return(
        <div>
            <Navigator value="www.youtool.info" />
            <div id="bannYTL">
                <img src={YoutoolLogo} alt="YouTool Logo"/>
                <h1>Notre Magasin</h1>
            </div>
            <div id="circulGlobal">
                <div id="circulLeft">
                    <div className="encartProduct">
                        <img src={Samsung} alt="samsung phone"/>
                        <div className="descriptProduct">
                            <h4>
                            899$
                            </h4>
                            <p>
                                <strong>SMARTPHONE</strong><br/>Téléphone nouvelle génération<br/> Taille écran: 6.1 pouces <br/>Définition: 3040 X 1440px<br/>Affichage: OLED<br/>DPI: 550pp
                            </p>
                        </div>
                        <div className="encartProduct">
                            <img src={Watch} alt="watch"/>
                            <div className="descriptProduct">
                                <h4>
                                    399$
                                </h4>
                                <p>
                                    <strong>MONTRE CONNECTÉE</strong><br/>Montre connectée multi-fonction<br/> Tracking GPS <br/>Suivis de santé<br/>Niveau de faim<br/>Niveau d'hydratation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="circulRight">

                </div>
            </div>
        </div>
    );
}

export default YouTool;