import './SeaWord.css';
import Navigator from "../../component/Navigator/Navigator";
import LogoSeaWord from "../../img/LogoSeaWord.png"
import Plongee from "../../img/bouteille plongee.png";
import Jerrican from "../../img/jerrycan.png";
import CannePeche from "../../img/canne a peche.png";
import Appat from "../../img/appat.png";

function SeaWord() {
    return(
      <div>
          <Navigator value="www.seaword.info" />
          <div className="backgroundSea">
              <div id="headerSeaWord">
                  <img src={LogoSeaWord} alt="logo sea word" id="logoSeaWord"/>
              </div>
              <div id="mainSeaWord">
                  <h1>Les trésors de la mer à votre portée</h1>
                  <div className="productLeft">
                      <img src={Plongee} alt="bouteille de plongée"/>
                      <div className="descriptProductSea">
                          <h2>Matériel de plongée</h2>
                          <p>Réservoir de plongée Catalina Aluminium 19 avec valve standart et une carte de remplissage gratuite.

                              La bouteille de plongée Catalina Aluminium 19 avec valve offre la meilleure qualité de réservoir avec d'excellentes caractéristiques de flottabilité à réservoir simple et double réservoir à gaz ou à montage latéral.
                          </p>
                          <h3>Prix: 2500$</h3>
                      </div>
                  </div>
                  <div className="productRight">
                      <div className="descriptProductSea">
                          <h2>Jerrican</h2>
                          <p>Bidon d'essence à évent Scepter 4WD, 20 L (5 gal), reconnu dans l'industrie pour un entreposage sécuritaire du carburant Contenant pour carburant Scepter conçu pour l'aventure, idéal pour les VR et les loisirs Doté d'un bec autoventilé facile à verser et d'une fermeture sécuritaire à l'épreuve des enfants Bidon présentant un profil de style militaire unique qui permet un rangement efficace dans les petits espaces et fait de PEHD durable et résistant à la corrosion
                          </p>
                          <h3>Prix: 200$</h3>
                      </div>
                      <img src={Jerrican} alt="jerrican"/>
                  </div>
                  <div className="productLeft">
                      <img src={CannePeche} alt="bouteille de plongée"/>
                      <div className="descriptProductSea">
                          <h2>Canne à pêche</h2>
                          <p>Les cannes à actions semi-paraboliques comme l'Extrem 1 sont plus adaptées aux débutants, car elles facilitent le lancer grâce à leur souplesse.
                              Bon compromis entre souplesse (face aux poissons) et distances atteignables lors des lancers.
                              L’action semi-parabolique permet à la canne de se courber plus en son milieu.<br/>Taille en 12 pieds (3,60 m) : les longueurs de cannes à carpe situées entre 11 et 13 PIEDS sont plus adaptées pour pêcher la carpe du bord.
                          </p>
                          <h3>Prix: 1200$</h3>
                      </div>
                  </div>
                  <div className="productRight">
                      <div className="descriptProductSea">
                          <h2>Appât</h2>
                          <p>Parfaitement équilibré, le leurre Husky Jerk peut être lancé ou pêché à la traîne à n'importe quelle vitesse et capturer des poissons. La chambre de cliquetis transmet des vagues de sons qui s'amplifient dans l'eau. Modèles métalliques peints ou en verre.
                              <br/>.Parfaitement équilibré, convient au lancer et à la traîne et se déplace en ligne droite peu importe la vitesse
                              <br/>.Hochet intérieur émettant des ondes sonores amplifiées par l'eau
                              <br/>.Hameçons VMC en nickel noir de qualité supérieure
                          </p>
                          <h3>Prix: 1$</h3>
                      </div>
                      <img src={Appat} alt="bouteille de plongée"/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default SeaWord;