import './YouTool.css';
import Navigator from "../../component/Navigator/Navigator";
import YoutoolLogo from "../../img/EncartYouTool.jpg";
import Samsung from "../../img/YouToolImg/samsung.png";
import Watch from "../../img/YouToolImg/apple-watch.png";
import Talkie from "../../img/YouToolImg/talkie.png";
import CleAnglaise from "../../img/YouToolImg/clesAnglaise.png";
import Marteau from "../../img/YouToolImg/marteau.png";
import Lampe from "../../img/YouToolImg/lampe.png";
import Jumelle from "../../img/YouToolImg/jumelle.png";
import Tournevis from "../../img/YouToolImg/tournevis.png";
import PerceuseLourde from "../../img/YouToolImg/perceuseLourde.png";
import Perceuse from "../../img/YouToolImg/perceuse.png";
import Foret from "../../img/YouToolImg/foret.png";
import KitReparation from "../../img/YouToolImg/kitreparation.png";
import KitNettoyage from "../../img/YouToolImg/kitnettoyage.png";
import Petard2B from "../../img/YouToolImg/Petard2B.png";
import PetardPop from "../../img/YouToolImg/PetardPop.png";
import PetardWipe from "../../img/YouToolImg/PetardWipe.png";
import PetardWeeping from "../../img/YouToolImg/PetardWeeping.png";


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
                    <div className="encartProduct">
                        <img src={Talkie} alt="talkie"/>
                        <div className="descriptProduct">
                            <h4>
                                249$
                            </h4>
                            <p>
                                <strong>RADIO</strong><br/>Radio de communication par ondes<br/> 2 fréquences <br/>Scan auto<br/>Prise casque<br/>Portée 2km
                            </p>
                        </div>
                    </div>
                </div>
                <div id="circulRight">
                    <div className="encartProduct1">
                        <div className="descriptProduct1">
                            <img src={CleAnglaise} alt="clé anglais"/>
                            <h4>
                                149$
                            </h4>
                        </div>
                        <p>
                            <strong>CLÉ ANGLAISE</strong><br/>2 1/2" ouverture maximum<br/> Spring loaded jaws <br/>Mousse trempé poignée de coussin<br/>molette de réglage moleté<br/>Les dents en dents de scie dans des directions opposées
                        </p>
                    </div>
                    <div className="encartProduct2">
                        <div className="descriptProduct2">
                            <img src={Marteau} alt="Marteau"/>
                            <p>
                                <strong>MARTEAU</strong><br/>Manche en bois<br/> Ergonomique <br/>Tête en acier<br/>500g
                            </p>
                        </div>
                        <h4>
                            129$
                        </h4>
                    </div>
                    <div className="encartProduct3">
                        <h4>
                            109$
                        </h4>
                        <div className="descriptProduct3">
                            <p>
                                <strong>LAMPE DE POCHE</strong><br/>Lampe LED<br/> Aluminium IP66 <br/>3 Piles AA<br/>10H Autonomie<br/>700 Lumens
                            </p>
                            <img src={Lampe} alt="lampe"/>
                        </div>
                    </div>
                    <div className="encartProduct2">
                        <div className="descriptProduct2">
                            <img src={Tournevis} alt="tournevis"/>
                            <p>
                                <strong>KIT TOURNEVIS</strong><br/>Jeu de tournevis 8 pièces avec carré d'entraînement<br/>Trou de dragonne<br/>Conseils magnétiques<br/>Hauteur assemblé (en pouces)
                                13.74<br/>Largeur assemblée (en pouces)
                                9.4
                            </p>
                        </div>
                        <h4>
                            349$
                        </h4>
                    </div>
                    <div className="encartProduct1">
                        <div className="descriptProduct1">
                            <img src={Jumelle} alt="jumelle"/>
                            <h4>
                                119$
                            </h4>
                        </div>
                        <p>
                            <strong>JUMELLE</strong><br/>alliage d'aluminium durable et léger<br/> Distance minimale de mise au point : 7,62 m <br/>Pupille de sortie : 5 mm<br/>Dégagement oculaire : 0,63 po<br/>Poids : 790 g
                        </p>
                    </div>
                    <div className="encartProduct3">
                        <h4>
                            499$
                        </h4>
                        <div className="descriptProduct3">
                            <p>
                                <strong>PERCEUSE LOURDE</strong><br/>Dimension du mandrin 1/2"<br/>Tension 120V<br/>Mandrin sans clé<br/>Ampères 10A<br/>Poids 5.2lb
                            </p>
                            <img src={PerceuseLourde} alt="perceuse lourde"/>
                        </div>
                    </div>
                    <div className="encartProduct2">
                        <div className="descriptProduct2">
                            <img src={Perceuse} alt="perceuse"/>
                            <p>
                                <strong>PERCEUSE A MAIN</strong><br/>Couple maximum (Nm): 200<br/>Couple maximum (pi-lb): 148 pi-lb<br/>Couple maximum (polb): 1770<br/>Chargeur de batterie inclus
                                13.74<br/>Largeur assemblée (en pouces)
                                9.4
                            </p>
                        </div>
                        <h4>
                            399$
                        </h4>
                    </div>
                    <div className="encartProduct3">
                        <h4>
                            499$
                        </h4>
                        <div className="descriptProduct3">
                            <p>
                                <strong>FORET DE PERCEUSE</strong><br/>Pointe fendue à 135°<br/>En acier rapide<br/>Longueur: 20cm<br/>Diamètre: 0.5cm<br/>Pour métaux ferreux
                            </p>
                            <img src={Foret} alt="foret"/>
                        </div>
                    </div>
                    <div className="encartProduct1">
                        <div className="descriptProduct1">
                            <img src={KitReparation} alt="kit réparation"/>
                            <h4>
                                249$
                            </h4>
                        </div>
                        <p>
                            <strong>KIT RÉPARATION</strong><br/>Boite en métal<br/> kit de réparation: auto <br/>Largeur: 25cm<br/>Longueur: 50cm<br/>Poids : 1865g
                        </p>
                    </div>
                    <div className="encartProduct2">
                        <div className="descriptProduct2">
                            <img src={KitNettoyage} alt="kit nettoyage"/>
                            <p>
                                <strong>KIT NETTOYAGE</strong><br/>Nombre de pièces: 7<br/>Lavage/Lustrage/Protection<br/>MicroFibre<br/>Peau de chamois<br/>Sceau de lavage
                            </p>
                        </div>
                        <h4>
                            69$
                        </h4>
                    </div>
                    <div className="encartProduct1">
                        <div className="descriptProduct1">
                            <img src={Petard2B} alt="pétards 2brothers"/>
                            <h4>
                                5$
                            </h4>
                        </div>
                        <p>
                            <strong>PÉTARDS 2BROTHERS</strong>
                        </p>
                    </div>
                    <div className="encartProduct1">
                        <div className="descriptProduct1">
                            <img src={PetardPop} alt="pétards Poppelers"/>
                            <h4>
                                5$
                            </h4>
                        </div>
                        <p>
                            <strong>PÉTARDS POPPELERS</strong>
                        </p>
                    </div>
                    <div className="encartProduct1">
                        <div className="descriptProduct1">
                            <img src={PetardWeeping} alt="pétards weeping"/>
                            <h4>
                                5$
                            </h4>
                        </div>
                        <p>
                            <strong>PÉTARDS WEEPING</strong>
                        </p>
                    </div>
                    <div className="encartProduct1">
                        <div className="descriptProduct1">
                            <img src={PetardWipe} alt="pétards wipeout"/>
                            <h4>
                                5$
                            </h4>
                        </div>
                        <p>
                            <strong>PÉTARDS WipeOut</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YouTool;