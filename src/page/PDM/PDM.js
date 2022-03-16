import './PDM.css';
import Navigator from "../../component/Navigator/Navigator"
import $ from "jquery";
import imgPDMHead from "../../img/imgPDMHead.png"
import Vehicles from "../../component/Vehicles/Vehicles"
import Ocelot from "../../img/pdmImg/ocelot.png"
import Pedal from "../../img/pdmImg/PedalandMetal.png"
import Maibatsu from "../../img/pdmImg/maibatsu.png"
import Karin from "../../img/pdmImg/karin.png"
import Canis from "../../img/pdmImg/canis.png"
import Bravado from "../../img/pdmImg/bravado.png"
import BF from "../../img/pdmImg/bf.png"
import Maxwell from "../../img/pdmImg/maxwell.png"
import Dinka from "../../img/pdmImg/dinka.png"
import Grotti from "../../img/pdmImg/grotti.png"
import Weeny from "../../img/pdmImg/weeny.png"
import Benefactor from "../../img/pdmImg/benefactor.png"
import Bollokan from "../../img/pdmImg/bollokan.png"
import Declasse from "../../img/pdmImg/declasse.png"
import Dewbauchee from "../../img/pdmImg/dewbauchee.png"
import Enus from "../../img/pdmImg/Enus.png"
import Lampadati from "../../img/pdmImg/lampadati.png"
import Ubermacht from "../../img/pdmImg/ubermacht.png"
import Imponte from "../../img/pdmImg/imponte.png"
import Albany from "../../img/pdmImg/albany.png"
import Invetero from "../../img/pdmImg/invetero.png"
import Schyster from "../../img/pdmImg/schyster.png"
import Willard from "../../img/pdmImg/willard.png"
import Cheval from "../../img/pdmImg/cheval.png"
import Dundreary from "../../img/pdmImg/dundreary.png"
import Vulcar from "../../img/pdmImg/vulcar.png"
import Zirconium from "../../img/pdmImg/zirconium.png"
import Obey from "../../img/pdmImg/obey.png"
import Rune from "../../img/pdmImg/rune.png"
import Pegassi from "../../img/pdmImg/pegassi.png"
import Truffade from "../../img/pdmImg/truffade.png"


import BuffaloSTX from "../../img/pdmImg/buffalo-stx.webp"
import Scorcher from "../../img/pdmImg/scorcher.webp"
import Manchez from "../../img/pdmImg/manchez.jpg"
import Dilettante from "../../img/pdmImg/dilettante.webp"
import Stanier from "../../img/pdmImg/stanier.jpg"
import Vapid from "../../img/pdmImg/vapid.png"
import Mesa from "../../img/pdmImg/mesa.webp"
import Bifta from "../../img/pdmImg/bifta.webp"
import Jackal from "../../img/pdmImg/jackal.jpg"
import Tricycle from "../../img/pdmImg/tri-cycles-race-bike.webp"
import BMX from "../../img/pdmImg/bmx.webp"
import Cruiser from "../../img/pdmImg/cruiser.webp"
import Endurex from "../../img/pdmImg/endurex-race-bike.webp"
import Fixter from "../../img/pdmImg/fixter.webp"
import Asbo from "../../img/pdmImg/asbo.jpg"
import Blista from "../../img/pdmImg/blista.webp"
import BlistaKanjo from "../../img/pdmImg/blista-kanjo.jpg"
import Brioso300 from "../../img/pdmImg/brioso-300.webp"
import Brioso from "../../img/pdmImg/brioso.webp"
import Club from "../../img/pdmImg/club.webp"
import Issi from "../../img/pdmImg/issi.webp"
import IssisClassique from "../../img/pdmImg/issi-classic.webp"
import Panto from "../../img/pdmImg/panto.webp"
import Prairie from "../../img/pdmImg/prairie.webp"
import Rhapsody from "../../img/pdmImg/rhapsody.webp"
import Weevil from "../../img/pdmImg/weevil.webp"
import Champion from "../../img/pdmImg/champion.webp"
import CognoscentiCabrio from "../../img/pdmImg/cognoscenti-cabrio.jpg"
import Exemplar from "../../img/pdmImg/exemplar.jpg"
import F620 from "../../img/pdmImg/f620.jpg"
import Felon from "../../img/pdmImg/felon.jpg"
import FelonGT from "../../img/pdmImg/felon-gt.jpg"
import Futo from "../../img/pdmImg/futo.webp"
import OracleXS from "../../img/pdmImg/oracle-2.jpg"
import Previon from "../../img/pdmImg/previon.webp"
import Sentinel from "../../img/pdmImg/sentinel.jpg"
import SentinelXS from "../../img/pdmImg/sentinel-xs.jpg"
import SentinelClassic from "../../img/pdmImg/sentinel-classic.webp"
import Windsor from "../../img/pdmImg/windsor.jpg"
import WindsorDrop from "../../img/pdmImg/windsor-drop.jpg"
import Zion from "../../img/pdmImg/zion.jpg"
import ZionCab from "../../img/pdmImg/zion-cabrio.webp"
import Duke from "../../img/pdmImg/dukes.webp"
import Blade from "../../img/pdmImg/blade.webp"
import Buccaneer from "../../img/pdmImg/buccaneer.webp"
import BuccaneerCustom from "../../img/pdmImg/buccaneer-custom.webp"
import BSStalion from "../../img/pdmImg/stallion-burger-shot.webp"
import Chino from "../../img/pdmImg/chino.webp"
import ChinoCustom from "../../img/pdmImg/chino-custom.webp"
import Clique from "../../img/pdmImg/clique.webp"
import BlackFinCoquette from "../../img/pdmImg/coquette-blackfin.webp"
import Deviant from "../../img/pdmImg/deviant.webp"
import Dominator from "../../img/pdmImg/dominator.webp"
import ASPDominator from "../../img/pdmImg/dominator-asp.webp"
import GTTDominator from "../../img/pdmImg/dominator-gtt.jpg"
import GTXDominator from "../../img/pdmImg/dominator-gtx.webp"
import Tampa from "../../img/pdmImg/tampa.webp"
import DriftTampa from "../../img/pdmImg/tampa-drift.webp"
import DriftYosemite from "../../img/pdmImg/drift-yosemite.webp"
import Ellie from "../../img/pdmImg/ellie.webp"
import Faction from "../../img/pdmImg/faction.webp"
import CustomFaction from "../../img/pdmImg/faction-custom.webp"
import DonkFaction from "../../img/pdmImg/faction-custom-donk.webp"
import Gauntlet from "../../img/pdmImg/gauntlet.webp"
import ClassicGauntlet from "../../img/pdmImg/gauntlet-classic.webp"
import CustomClassicGauntlet from "../../img/pdmImg/gauntlet-classic-custom.webp"
import HellfireGauntlet from "../../img/pdmImg/gauntlet-hellfire.webp"
import Hermes from "../../img/pdmImg/hermes.webp"
import HotKinife from "../../img/pdmImg/hotknife.webp"
import Hustler from "../../img/pdmImg/hustler.webp"
import Impaler from "../../img/pdmImg/impaler.webp"
import LostSlamVan from "../../img/pdmImg/slamvan-lost.webp"
import Lurcher from "../../img/pdmImg/lurcher.webp"
import Manana from "../../img/pdmImg/manana.webp"
import CustomManana from "../../img/pdmImg/manana-custom.webp"
import Nightshade from "../../img/pdmImg/nightshade.webp"
import Phoenix from "../../img/pdmImg/phoenix.webp"
import Picador from "../../img/pdmImg/picador.webp"
import LoaderRat from "../../img/pdmImg/rat-loader.webp"
import TruckRat from "../../img/pdmImg/rat-truck.webp"
import Ruiner from "../../img/pdmImg/ruiner.webp"
import SabreTurbo from "../../img/pdmImg/sabre-turbo.webp"
import CustomSabre from "../../img/pdmImg/sabre-custom.webp"
import SlamTruck from "../../img/pdmImg/slamtruck.webp"
import SlamVan from "../../img/pdmImg/slamvan.webp"
import SlamVanCustom from "../../img/pdmImg/slamvan-custom.webp"
import Stalion from "../../img/pdmImg/stallion.webp"
import Tulip from "../../img/pdmImg/tulip.jpg"
import Vamos from "../../img/pdmImg/vamos.webp"
import Vigero from "../../img/pdmImg/vigero.webp"
import Virgo from "../../img/pdmImg/virgo.webp"
import ClassicVirgo from "../../img/pdmImg/virgo-classic.webp"
import CustomClassicVirgo from "../../img/pdmImg/virgo-classic-custom.webp"
import CustomVoodoo from "../../img/pdmImg/voodoo-custom.webp"
import Voodoo from "../../img/pdmImg/voodoo.webp"
import Yosemite from "../../img/pdmImg/yosemite.webp"
import Asea from "../../img/pdmImg/asea.jpg"
import Asterope from "../../img/pdmImg/asterope.jpg"
import Cinquemila from "../../img/pdmImg/cinquemila.webp"
import Cognoscenti from "../../img/pdmImg/cognoscenti.jpg"
import Cognoscenti55 from "../../img/pdmImg/cognoscenti-55.jpg"
import Deity from "../../img/pdmImg/deity.webp"
import Emperor from "../../img/pdmImg/emperor.jpg"
import Fugitive from "../../img/pdmImg/fugitive.jpg"
import Glendale from "../../img/pdmImg/glendale.jpg"
import CustomGlendale from "../../img/pdmImg/glendale-custom.webp"
import Ingot from "../../img/pdmImg/ingot.jpg"
import Intruder from "../../img/pdmImg/intruder.jpg"
import Oracle from "../../img/pdmImg/oracle-1.jpg"
import Premier from "../../img/pdmImg/premier.jpg"
import Primo from "../../img/pdmImg/primo.jpg"
import CustomPrimo from "../../img/pdmImg/primo-custom.jpg"
import Regina from "../../img/pdmImg/regina.jpg"
import Schafter from "../../img/pdmImg/schafter.jpg"
import Stafford from "../../img/pdmImg/stafford.jpg"
import Stratum from "../../img/pdmImg/stratum.jpg"
import Stretch from "../../img/pdmImg/stretch.jpg"
import SuperDiamond from "../../img/pdmImg/super-diamond.jpg"
import Surge from "../../img/pdmImg/surge.jpg"
import Tailgater from "../../img/pdmImg/tailgater.jpg"
import TailgaterS from "../../img/pdmImg/tailgater-s.webp"
import Warrener from "../../img/pdmImg/warrener.jpg"
import WarrenerHKR from "../../img/pdmImg/warrener-hkr.jpg"
import Washington from "../../img/pdmImg/washington.jpg"
import Z from "../../img/pdmImg/190z.webp"
import Casco from "../../img/pdmImg/casco.webp"
import Cheburek from "../../img/pdmImg/cheburek.webp"
import CheetahClassic from "../../img/pdmImg/cheetah-classic.webp"
import CoquetteClassic from "../../img/pdmImg/coquette-classic.webp"
import Dynasty from "../../img/pdmImg/dynasty.webp"
import Fagaloa from "../../img/pdmImg/fagaloa.webp"
import GT500 from "../../img/pdmImg/gt500.webp"
import InfernusClassic from "../../img/pdmImg/infernus-classic.webp"
import Mamba from "../../img/pdmImg/mamba.webp"
import MichelliGT from "../../img/pdmImg/michelli-gt.webp"
import Monroe from "../../img/pdmImg/monroe.webp"
import Nebula from "../../img/pdmImg/nebula-turbo.webp"
import Peyote from "../../img/pdmImg/peyote.webp"
import PeyoteTurbo from "../../img/pdmImg/peyote-custom.webp"
import PeyoteGasser from "../../img/pdmImg/peyote-gasser.jpg"
import Pigalle from "../../img/pdmImg/pigalle.webp"
import RapidGT from "../../img/pdmImg/rapid-gt-classic.webp"
import Retinue from "../../img/pdmImg/retinue.webp"
import RetinueMKII from "../../img/pdmImg/retinue-mk-ii.webp"
import Stinger from  "../../img/pdmImg/stinger.webp"
import StingerGT from "../../img/pdmImg/stinger-gt.webp"
import StirlingGT from "../../img/pdmImg/stirling-gt.webp"
import Torero from "../../img/pdmImg/torero.webp"
import Tornado from "../../img/pdmImg/tornado.webp"
import TornadoCustom from "../../img/pdmImg/tornado-custom.webp"
import TornadoGang from "../../img/pdmImg/tornado-convertible.webp"
import TornadoRatRod from "../../img/pdmImg/tornado-rat-rod.webp"
import TornadoMariachiCab from "../../img/pdmImg/tornado-mariachi.webp"
import TurismoClassic from "../../img/pdmImg/turismo-classic.webp"
import ZType from "../../img/pdmImg/z-type.webp"
import ZionClassic from "../../img/pdmImg/zion-classic.webp"



function PDM() {
    $( function() {
        let muscle = $(".muscle");
        let cycle = $(".cycle");
        let motorcycle = $(".motorcycle");
        let compact = $(".compact");
        let sedan = $(".sedan");
        let suv = $(".suv");
        let offroad = $(".offroad");
        let coupe = $(".coupe");
        let sport = $(".sport");
        let sportclassic = $(".sportsclassique");
        let supers = $(".super");
        let van = $(".van");
        let filterType = $("#filterTypePDM");
        filterType.click(function () {
            console.log(filterType.val());
            if (filterType.val() === "global") {
                muscle.css("display", "block");
                cycle.css("display", "block");
                motorcycle.css("display", "block");
                compact.css("display", "block");
                sedan.css("display", "block");
                suv.css("display", "block");
                offroad.css("display", "block");
                coupe.css("display", "block");
                sport.css("display", "block");
                sportclassic.css("display", "block");
                supers.css("display", "block");
                van.css("display", "block");
            }
            else if (filterType.val() === "muscle") {
                muscle.css("display", "block");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "cycle") {
                muscle.css("display", "none");
                cycle.css("display", "block");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "motorcycle") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "block");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "compact") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "block");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "sedan") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "block");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "suv") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "block");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "suv") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "block");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "offroad") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "block");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "coupe") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "block");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "sport") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "block");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "sportsclassic") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "block");
                supers.css("display", "none");
                van.css("display", "none");
            }
            else if (filterType.val() === "supers") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "block");
                van.css("display", "none");
            }
            else if (filterType.val() === "van") {
                muscle.css("display", "none");
                cycle.css("display", "none");
                motorcycle.css("display", "none");
                compact.css("display", "none");
                sedan.css("display", "none");
                suv.css("display", "none");
                offroad.css("display", "none");
                coupe.css("display", "none");
                sport.css("display", "none");
                sportclassic.css("display", "none");
                supers.css("display", "none");
                van.css("display", "block");
            }
        })
    });
    return(
      <div>
          <Navigator value="www.premuimdeluxemotorsport.info" />
          <div className="headPDM">
              <img src={imgPDMHead} alt=""/>
          </div>
          <div className="rentalPDM">
              <div className="filterDisplay">
                  <div className="headFilterDisplay">
                      <h1>Notre catalogue</h1>
                      <select name="filterType" id="filterTypePDM">
                          <option value="global" className="optionCSSPDM">Tout véhicules</option>
                          <option value="cycle" className="optionCSSPDM">Cycles</option>
                          <option value="motorcycle" className="optionCSSPDM">Motorcycles</option>
                          <option value="compact" className="optionCSSPDM">Compacts</option>
                          <option value="sedan" className="optionCSSPDM">Sedans</option>
                          <option value="suv" className="optionCSSPDM">SUVs</option>
                          <option value="offroad" className="optionCSSPDM">OffRoads</option>
                          <option value="coupe" className="optionCSSPDM">Coupés</option>
                          <option value="sport" className="optionCSSPDM">Sports</option>
                          <option value="sportsclassic" className="optionCSSPDM">Sports Classiques</option>
                          <option value="muscle" className="optionCSSPDM">Muscles</option>
                          <option value="supers" className="optionCSSPDM">Supers</option>
                          <option value="van" className="optionCSSPDM">Vans</option>
                      </select>
                  </div>
                  <div id="catalog">
                      {/* 0 to 10K */}
                      <Vehicles class="cycle" name="BMX" places="1" src={BMX} alt="BMX" fuel="Manuel" speed="31" chest="0"
                                srcBrand={Pedal} altBrand="PedalAndMetal" train="RWD" price="690"/>
                      <Vehicles class="cycle" name="Cruiser" places="1" src={Cruiser} alt="Cruiser" fuel="Manuel" speed="28" chest="0"
                                srcBrand={Pedal} altBrand="PedalAndMetal" train="RWD" price="790"/>
                      <Vehicles class="cycle" name="Fixter" places="1" src={Fixter} alt="Fixter" fuel="Manuel" speed="39" chest="0"
                                srcBrand={Pedal} altBrand="PedalAndMetal" train="RWD" price="899"/>
                      <Vehicles class="cycle" name="Scorcher" places="1" src={Scorcher} alt="Scorcher" fuel="Manuel" speed="20" chest="0"
                                srcBrand={Pedal} train="RWD" price="990"/>
                      <Vehicles class="cycle" name="Tri-cycle" places="1" src={Tricycle} alt="Tricycle" fuel="Manuel" speed="39" chest="0"
                                srcBrand={Pedal} altBrand="PedalAndMetal" train="RWD" price="1 490"/>
                      <Vehicles class="cycle" name="Endurex" places="1" src={Endurex} alt="Endurex" fuel="Manuel" speed="39" chest="0"
                                srcBrand={Pedal} altBrand="PedalAndMetal" train="RWD" price="1499"/>
                      <Vehicles class="sportsclassic" name="TornadoRatRod" places="2" src={TornadoRatRod} alt="TornadoRatRod" fuel="Essence" speed="80" chest="62"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="2 590"/>
                      <Vehicles class="sportsclassic" name="Tornado Mariachi Cab" places="2" src={TornadoMariachiCab} alt="Tornado Mariachi Cab" fuel="Essence" speed="81" chest="62"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="2 890"/>
                      <Vehicles class="sportsclassic" name="Dynasty" places="4" src={Dynasty} alt="Dynasty" fuel="Essence" speed="74" chest="52"
                                srcBrand={Weeny} altBrand="Weeny" brand="Weeny" train="RWD" price="2 892"/>
                      <Vehicles class="compact" name="Dilettante" places="4" src={Dilettante} alt="Dilettante" fuel="Electric" speed="85" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="FWD" price="2 979"/>
                      <Vehicles class="sedan" name="Asea" places="4" src={Asea} alt="Asea" fuel="Essence" speed="90" chest="80"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="FWD" price="3 090"/>
                      <Vehicles class="sedan" name="Ingot" places="4" src={Ingot} alt="Ingot" fuel="Essence" speed="78" chest="93"
                                srcBrand={Vulcar} altBrand="Vulcar" brand="Vulcar" train="FWD" price="3 299"/>
                      <Vehicles class="compact" name="Panto" places="2" src={Panto} alt="Panto" fuel="Essence" speed="82" chest="38"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="3 490"/>
                      <Vehicles class="sedan" name="Regina" places="4" src={Regina} alt="Regina" fuel="Essence" speed="75" chest="115"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="3 793"/>
                      <Vehicles class="sportsclassic" name="Fagaloa" places="4" src={Fagaloa} alt="Fagaloa" fuel="Essence" speed="75" chest="98"
                                srcBrand={Vulcar} altBrand="Vulcar" brand="Vulcar" train="RWD" price="4 492"/>
                      <Vehicles class="sportsclassic" name="Pigalle" places="2" src={Pigalle} alt="Pigalle" fuel="Essence" speed="93" chest="52"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="4 990"/>
                      <Vehicles class="muscle" name="Manana" places="2" src={Manana} alt="Manana" fuel="Essence" speed="81" chest="78"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="5 390"/>
                      <Vehicles class="sedan" name="Asterope" places="4" src={Asterope} alt="Asterope" fuel="Essence" speed="90" chest="90"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="5 490"/>
                      <Vehicles class="sedan" name="Premier" places="4" src={Premier} alt="Premier" fuel="Essence" speed="90" chest="83"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="FWD" price="5 490"/>
                      <Vehicles class="compact" name="Prairie" places="2" src={Prairie} alt="Prairie" fuel="Essence" speed="84" chest="87"
                                srcBrand={Bollokan} altBrand="Bollokan" brand="Bollokan" train="FWD" price="5 690"/>
                      <Vehicles class="muscle" name="Rat-Loader" places="2" src={LoaderRat} alt="Rat-Loader" fuel="Essence" speed="84" chest="160"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="6 590"/>
                      <Vehicles class="sedan" name="Emperor" places="4" src={Emperor} alt="Emperor" fuel="Essence" speed="75" chest="92"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="6 595"/>
                      <Vehicles class="sportsclassic" name="Nebula" places="2" src={Nebula} alt="Nebula" fuel="Essence" speed="86" chest="62"
                                srcBrand={Vulcar} altBrand="Vulcar" brand="Vulcar" train="RWD" price="6 909"/>
                      <Vehicles class="motorcycle" name="Manchez" places="2" src={Manchez} alt="Manchez" fuel="Essence" speed="75" chest="0"
                                srcBrand={Maibatsu} altBrand="Maibatsu" brand="Maibatsu" train="RWD" price="7 190"/>
                      <Vehicles class="compact" name="Brioso-300" places="2" src={Brioso300} alt="Brioso-300" fuel="Essence" speed="72" chest="45"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="7 320"/>
                      <Vehicles class="compact" name="Issi-Classique" places="2" src={IssisClassique} alt="Issi-Classique" fuel="Essence" speed="78" chest="43"
                                srcBrand={Weeny} altBrand="Weeny" brand="Weeny" train="FWD" price="7 329"/>
                      <Vehicles class="sedan" name="Stratum" places="4" src={Stratum} alt="Stratum" fuel="Essence" speed="84" chest="114"
                                srcBrand={Zirconium} altBrand="Zirconium" brand="Zirconium" train="AWD" price="7 892"/>
                      <Vehicles class="compact" name="Asbo" places="2" src={Asbo} alt="Asbo" fuel="Essence" speed="78" chest="60"
                                srcBrand={Maxwell} altBrand="Maxwell" brand="Maxwell" train="FWD" price="9 290"/>
                      <Vehicles class="muscle" name="SlamVan" places="2" src={SlamVan} alt="SlamVan" fuel="Essence" speed="84" chest="126"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="9 990"/>
                      <Vehicles class="sedan" name="Glendale" places="4" src={Glendale} alt="Glendale" fuel="Essence" speed="91" chest="76"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="9 990"/>
                      <Vehicles class="sportsclassic" name="Cheburek" places="2" src={Cheburek} alt="Cheburek" fuel="Essence" speed="87" chest="49"
                                srcBrand={Rune} altBrand="Rune" brand="Rune" train="RWD" price="9 999"/>
                      <Vehicles class="sportsclassic" name="Tornado" places="2" src={Tornado} alt="Tornado" fuel="Essence" speed="81" chest="64"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="9 999"/>
                      {/* 10K to 20K */}
                      <Vehicles class="sportsclassic" name="Tornado Gang" places="2" src={TornadoGang} alt="Tornado Gang" fuel="Essence" speed="81" chest="62"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="11 990"/>
                      <Vehicles class="compact" name="Rhapsody" places="2" src={Rhapsody} alt="Rhapsody" fuel="Essence" speed="83" chest="56"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="11 995"/>
                      <Vehicles class="muscle" name="Picador" places="2" src={Picador} alt="Picador" fuel="Essence" speed="84" chest="120"
                                srcBrand={Cheval} altBrand="Cheval" brand="Cheval" train="AWD" price="12 990"/>
                      <Vehicles class="sedan" name="Primo" places="4" src={Primo} alt="Primo" fuel="Essence" speed="87" chest="96"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="12 995"/>
                      <Vehicles class="muscle" name="Voodoo Custom" places="2" src={CustomVoodoo} alt="Voodoo Custom" fuel="Essence" speed="80" chest="113"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="13 000"/>
                      <Vehicles class="sedan" name="Intruder" places="4" src={Intruder} alt="Intruder" fuel="Essence" speed="90" chest="91"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="13 992"/>
                      <Vehicles class="compact" name="Club" places="2" src={Club} alt="Club" fuel="Essence" speed="87" chest="75"
                                srcBrand={BF} altBrand="BF" brand="BF" train="FWD" price="14 980"/>
                      <Vehicles class="offroad" name="Bifta" places="2" src={Bifta} alt="Bifta" fuel="Essence" speed="70" chest="50"
                                srcBrand={BF} altBrand="BF" brand="BF" train="RWD" price="14 990"/>
                      <Vehicles class="muscle" name="Phoenix" places="2" src={Phoenix} alt="Phoenix" fuel="Essence" speed="90" chest="89"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="14 995"/>
                      <Vehicles class="muscle" name="Virgo Classic" places="2" src={ClassicVirgo} alt="Virgo Classic" fuel="Essence" speed="84" chest="115"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="15 490"/>
                      <Vehicles class="sedan" name="Washington" places="4" src={Washington} alt="Washington" fuel="Essence" speed="87" chest="90"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="15 790"/>
                      <Vehicles class="muscle" name="Virgo Classic Custom" places="2" src={CustomClassicVirgo} alt="Virgo Classic Custom" fuel="Essence" speed="84" chest="115"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="15 990"/>
                      <Vehicles class="sedan" name="Stanier" places="4" src={Stanier} alt="Stanier" fuel="Essence" speed="80" chest="100"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="15 990"/>
                      <Vehicles class="compact" name="Issi" places="2" src={Issi} alt="Issi" fuel="Essence" speed="83" chest="53"
                                srcBrand={Weeny} altBrand="Weeny" brand="Weeny" train="FWD" price="17 592"/>
                      <Vehicles class="compact" name="Blista" places="2" src={Blista} alt="Blista" fuel="Essence" speed="84" chest="55"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="FWD" price="17 990"/>
                      <Vehicles class="compact" name="Brioso R/A" places="2" src={Brioso} alt="Brioso" fuel="Essence" speed="84" chest="63"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="18 990"/>
                      <Vehicles class="compact" name="Weevil" places="2" src={Weevil} alt="Weevil" fuel="Essence" speed="84" chest="62"
                                srcBrand={BF} altBrand="BF" brand="BF" train="RWD" price="19 990"/>
                      {/* 20K to 30k */}
                      <Vehicles class="muscle" name="Lurcher" places="2" src={Lurcher} alt="Lurcher" fuel="Essence" speed="90" chest="106"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="20 150"/>
                      <Vehicles class="sedan" name="Warrener" places="4" src={Warrener} alt="Warrener" fuel="Essence" speed="87" chest="90"
                                srcBrand={Vulcar} altBrand="Vulcar" brand="Vulcar" train="RWD" price="21 690"/>
                      <Vehicles class="muscle" name="SlamVan Lost" places="2" src={LostSlamVan} alt="SlamVan Lost" fuel="Essence" speed="84" chest="145"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="22 990"/>
                      <Vehicles class="sportsclassic" name="Peyote" places="2" src={Peyote} alt="Peyote" fuel="Essence" speed="81" chest="42"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="23 050"/>
                      <Vehicles class="muscle" name="Stalion" places="2" src={Stalion} alt="Stalion" fuel="Essence" speed="89" chest="97"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="23 979"/>
                      <Vehicles class="muscle" name="BurgerShot Stalion" places="2" src={BSStalion} alt="BurgerShot Stalion" fuel="Essence" speed="89" chest="94"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="24 510"/>
                      <Vehicles class="muscle" name="Vigero" places="2" src={Vigero} alt="Vigero" fuel="Essence" speed="87" chest="103"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="24 980"/>
                      <Vehicles class="sedan" name="Fugitive" places="4" src={Fugitive} alt="Fugitive" fuel="Essence" speed="90" chest="95"
                                srcBrand={Cheval} altBrand="Cheval" brand="Cheval" train="RWD" price="27 930"/>
                      <Vehicles class="suv" name="Mesa" places="4" src={Mesa} alt="Mesa" fuel="Essence" speed="92" chest="95"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="28 059"/>
                      <Vehicles class="muscle" name="Rat-Truck" places="2" src={TruckRat} alt="Rat-Truck" fuel="Essence" speed="84" chest="111"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="28 120"/>
                      {/* 30K to 40K */}
                      <Vehicles class="sedan" name="Surge" places="4" src={Surge} alt="Surge" fuel="Essence" speed="87" chest="90"
                                srcBrand={Cheval} altBrand="Cheval" brand="Cheval" train="FWD" price="32 010"/>
                      <Vehicles class="muscle" name="Ruiner" places="2" src={Ruiner} alt="Ruiner" fuel="Essence" speed="90" chest="67"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="32 040"/>
                      <Vehicles class="sportsclassic" name="Retinue" places="2" src={Retinue} alt="Retinue" fuel="Essence" speed="87" chest="41"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="32 840"/>
                      <Vehicles class="coupe" name="Oracle" places="4" src={Oracle} alt="Oracle" fuel="Essence" speed="94" chest="112"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermatch" train="RWD" price="32 950"/>
                      <Vehicles class="muscle" name="Faction" places="2" src={Faction} alt="Faction" fuel="Essence" speed="87" chest="105"
                                srcBrand={Willard} altBrand="Willard" brand="Willard" train="RWD" price="32 990"/>
                      <Vehicles class="sportsclassic" name="Retinue MKII" places="2" src={RetinueMKII} alt="Retinue MKII" fuel="Essence" speed="90" chest="42"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="33 510"/>
                      <Vehicles class="coupe" name="Oracle XS" places="4" src={OracleXS} alt="Oracle XS" fuel="Essence" speed="94" chest="96"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermatch" train="RWD" price="33 520"/>
                      <Vehicles class="muscle" name="Blade" places="2" src={Blade} alt="Blade" fuel="Essence" speed="90" chest="102"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="33 870"/>
                      <Vehicles class="sportsclassic" name="Michelli GT" places="2" src={MichelliGT} alt="Michelli GT" fuel="Essence" speed="87" chest="68"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="33 970"/>
                      <Vehicles class="coupe" name="Sentinel" places="2" src={Sentinel} alt="Sentinel" fuel="Essence" speed="88" chest="92"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="34 110"/>
                      <Vehicles class="sedan" name="Warrener HKR" places="4" src={WarrenerHKR} alt="Warrener HKR" fuel="Essence" speed="90" chest="90"
                                srcBrand={Vulcar} altBrand="Vulcar" brand="Vulcar" train="RWD" price="34 125"/>
                      <Vehicles class="muscle" name="Duke" places="2" src={Duke} alt="Duke" fuel="Essence" speed="89" chest="106"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="34 129"/>
                      <Vehicles class="coupe" name="Sentinel XS" places="2" src={SentinelXS} alt="SentinelXS" fuel="Essence" speed="88" chest="87"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="34 550"/>
                      <Vehicles class="muscle" name="Dominator" places="2" src={Dominator} alt="Dominator" fuel="Essence" speed="90" chest="111"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="34 970"/>
                      <Vehicles class="muscle" name="Buccaneer" places="2" src={Buccaneer} alt="Buccaneer" fuel="Essence" speed="90" chest="108"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="34 980"/>
                      <Vehicles class="muscle" name="Sabre Turbo" places="2" src={SabreTurbo} alt="Sabre Turbo" fuel="Essence" speed="87" chest="97"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="AWD" price="35 879"/>
                      <Vehicles class="coupe" name="Futo" places="2" src={Futo} alt="Futo" fuel="Essence" speed="84" chest="90"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="35 930"/>
                      <Vehicles class="muscle" name="Deviant" places="2" src={Deviant} alt="Deviant" fuel="Essence" speed="90" chest="101"
                                srcBrand={Schyster} altBrand="Schyster" brand="Schyster" train="RWD" price="35 980"/>
                      <Vehicles class="muscle" name="Gauntlet" places="2" src={Gauntlet} alt="Gauntlet" fuel="Essence" speed="90" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="35 992"/>
                      <Vehicles class="muscle" name="Chino" places="2" src={Chino} alt="Chino" fuel="Essence" speed="94" chest="103"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="37 150"/>
                      <Vehicles class="compact" name="Blista-Kanjo" places="2" src={BlistaKanjo} alt="Blista-Kanjo" fuel="Essence" speed="86" chest="65"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="FWD" price="37 930"/>
                      <Vehicles class="sedan" name="Schafter" places="4" src={Schafter} alt="Schafter" fuel="Essence" speed="90" chest="102"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="39 990"/>
                      {/* 40K to 50K */}
                      <Vehicles class="muscle" name="Yosemite" places="2" src={Yosemite} alt="Yosemite" fuel="Essence" speed="85" chest="119"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="40 770"/>
                      <Vehicles class="sportsclassic" name="Tornado Custom" places="2" src={TornadoCustom} alt="Tornado Custom" fuel="Essence" speed="81" chest="65"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="41 990"/>
                      <Vehicles class="muscle" name="Manana Custom" places="2" src={CustomManana} alt="Manana Custom" fuel="Essence" speed="88" chest="103"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="42 987"/>
                      <Vehicles class="coupe" name="Zion" places="2" src={Zion} alt="Zion" fuel="Essence" speed="90" chest="98"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="42 990"/>
                      <Vehicles class="sedan" name="Tailgater" places="4" src={Tailgater} alt="Tailgater" fuel="Essence" speed="90" chest="90"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="RWD" price="42 999"/>
                      <Vehicles class="coupe" name="Zion Cabrio" places="2" src={ZionCab} alt="Zion Cab" fuel="Essence" speed="90" chest="88"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermatch" train="RWD" price="43 529"/>
                      <Vehicles class="muscle" name="Virgo" places="2" src={Virgo} alt="Virgo" fuel="Essence" speed="84" chest="113"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="43 990"/>
                      <Vehicles class="sedan" name="Glendale Custom" places="4" src={CustomGlendale} alt="Glendale Custom" fuel="Essence" speed="92" chest="85"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="43 990"/>
                      <Vehicles class="coupe" name="Jackal" places="4" src={Jackal} alt="Jackal" fuel="Essence" speed="105" chest="110"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="RWD" price="43 997"/>
                      <Vehicles class="coupe" name="Felon" places="4" src={Felon} alt="Felon" fuel="Essence" speed="90" chest="95"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="44 992"/>
                      <Vehicles class="muscle" name="SlamVan Custom" places="2" src={SlamVanCustom} alt="SlamVan Custom" fuel="Essence" speed="84" chest="120"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="45 990"/>
                      <Vehicles class="coupe" name="FelonGT" places="2" src={FelonGT} alt="FelonGT" fuel="Essence" speed="90" chest="87"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="45 997"/>
                      <Vehicles class="muscle" name="Tampa" places="2" src={Tampa} alt="Tampa" fuel="Essence" speed="87" chest="107"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="46 699"/>
                      <Vehicles class="sedan" name="Primo Custom" places="4" src={CustomPrimo} alt="Primo Custom" fuel="Essence" speed="87" chest="92"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="47 560"/>
                      <Vehicles class="muscle" name="Virgo Rouillé" places="2" src={Voodoo} alt="Voodoo Rouillé" fuel="Essence" speed="81" chest="112"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="47 590"/>
                      <Vehicles class="muscle" name="Faction-Custom" places="2" src={CustomFaction} alt="Faction-Custom" fuel="Essence" speed="87" chest="94"
                                srcBrand={Willard} altBrand="Willard" brand="Willard" train="RWD" price="48 995"/>
                      <Vehicles class="muscle" name="BuccaneerCustom" places="2" src={BuccaneerCustom} alt="BuccaneerCustom" fuel="Essence" speed="91" chest="102"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="49 990"/>
                      {/* 50K to 60K */}
                      <Vehicles class="muscle" name="Sabre GT" places="2" src={CustomSabre} alt="Sabre GT" fuel="Essence" speed="87" chest="104"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="50 992"/>
                      <Vehicles class="coupe" name="Previon" places="2" src={Previon} alt="Previon" fuel="Essence" speed="92" chest="89"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="51 190"/>
                      <Vehicles class="muscle" name="ChinoCustom" places="2" src={ChinoCustom} alt="ChinoCustom" fuel="Essence" speed="95" chest="104"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="51 920"/>
                      <Vehicles class="muscle" name="Tulip" places="2" src={Tulip} alt="Tulip" fuel="Essence" speed="92" chest="90"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="51 990"/>
                      <Vehicles class="muscle" name="Impaler" places="2" src={Impaler} alt="Impaler" fuel="Essence" speed="94" chest="104"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="51 992"/>
                      <Vehicles class="sportsclassic" name="Zion Classic" places="2" src={ZionClassic} alt="Zion Classic" fuel="Essence" speed="93" chest="64"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="51 999"/>
                      <Vehicles class="muscle" name="Vamos" places="2" src={Vamos} alt="Vamos" fuel="Essence" speed="90" chest="88"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="53 990"/>
                      <Vehicles class="muscle" name="Clique" places="2" src={Clique} alt="Clique" fuel="Essence" speed="93" chest="97"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="55 970"/>
                      <Vehicles class="sportsclassic" name="Peyote Turbo" places="2" src={PeyoteTurbo} alt="Peyote Turbo" fuel="Essence" speed="87" chest="42"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="59 990"/>
                      {/* 60K to 70K */}
                      <Vehicles class="muscle" name="HotKnife" places="2" src={HotKinife} alt="HotKnife" fuel="Essence" speed="87" chest="96"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="62 997"/>
                      <Vehicles class="sportsclassic" name="Casco" places="2" src={Casco} alt="Casco" fuel="Essence" speed="94" chest="46"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="65 930"/>
                      <Vehicles class="sportsclassic" name="Coquette Classic" places="2" src={CoquetteClassic} alt="Coquette Classic" fuel="Essence" speed="94" chest="35"
                                srcBrand={Invetero} altBrand="Invetero" brand="Invetero" train="RWD" price="67 980"/>
                      <Vehicles class="muscle" name="Nightshade" places="2" src={Nightshade} alt="Nightshade" fuel="Essence" speed="90" chest="92"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="67 995"/>
                      <Vehicles class="muscle" name="Dominator-GTX" places="2" src={GTXDominator} alt="Dominator-GTX" fuel="Essence" speed="90" chest="108"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="68 949"/>
                      <Vehicles class="muscle" name="Dominator-ASP" places="2" src={ASPDominator} alt="Dominator-ASP" fuel="Essence" speed="93" chest="113"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="69 980"/>
                      <Vehicles class="muscle" name="Coquette BlackFin" places="2" src={BlackFinCoquette} alt="Coquette BlackFin" fuel="Essence" speed="93" chest="78"
                                srcBrand={Invetero} altBrand="Invetero" brand="Invetero" train="RWD" price="69 990"/>
                      <Vehicles class="sportsclassic" name="Stinger" places="2" src={Stinger} alt="Stinger" fuel="Essence" speed="90" chest="35"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="69 990"/>
                      {/* 70K to 80K */}
                      <Vehicles class="muscle" name="Yosemite-Drift" places="2" src={DriftYosemite} alt="Yosemite-Drift" fuel="Essence" speed="87" chest="150"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="70 920"/>
                      <Vehicles class="muscle" name="Tampa-Drift" places="2" src={DriftTampa} alt="Tampa-Drift" fuel="Essence" speed="93" chest="65"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="71 699"/>
                      <Vehicles class="muscle" name="Gauntlet-Classic" places="2" src={ClassicGauntlet} alt="Gauntlet-Classic" fuel="Essence" speed="88" chest="101"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="71 970"/>
                      <Vehicles class="sportsclassic" name="Stinger GT" places="2" src={StingerGT} alt="Stinger GT" fuel="Essence" speed="90" chest="42"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="71 990"/>
                      <Vehicles class="muscle" name="Gauntlet-HellFire" places="2" src={HellfireGauntlet} alt="Gauntlet-HellFire" fuel="Essence" speed="96" chest="109"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="72 980"/>
                      <Vehicles class="sportsclassic" name="Rapid GT" places="2" src={RapidGT} alt="Rapid GT" fuel="Essence" speed="93" chest="48"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="72 990"/>
                      <Vehicles class="muscle" name="Gauntlet-Classic-Custom" places="2" src={CustomClassicGauntlet} alt="Gauntlet-Classic-Custom" fuel="Essence" speed="98" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="73 970"/>
                      <Vehicles class="sportsclassic" name="GT500" places="2" src={GT500} alt="GT500" fuel="Essence" speed="87" chest="62"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="73 993"/>
                      <Vehicles class="muscle" name="Ellie" places="2" src={Ellie} alt="Ellie" fuel="Essence" speed="88" chest="99"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="74 992"/>
                      <Vehicles class="coupe" name="Exemplar" places="4" src={Exemplar} alt="Exemplar" fuel="Essence" speed="90" chest="115"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="75 999"/>
                      <Vehicles class="sedan" name="TailgaterS" places="4" src={TailgaterS} alt="TailgaterS" fuel="Essence" speed="92" chest="90"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="RWD" price="77 199"/>
                      <Vehicles class="sportsclassic" name="Peyote Gasser" places="2" src={PeyoteGasser} alt="Peyote Gasser" fuel="Essence" speed="93" chest="42"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="77 199"/>
                      <Vehicles class="coupe" name="Cognoscenti-Cabrio" places="2" src={CognoscentiCabrio} alt="Cognoscenti-Cabrio" fuel="Essence" speed="90" chest="120"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="77 970"/>
                      <Vehicles class="coupe" name="F620" places="2" src={F620} alt="F620" fuel="Essence" speed="90" chest="105"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="RWD" price="78 893"/>
                      <Vehicles class="muscle" name="Hustler" places="2" src={Hustler} alt="Hustler" fuel="Essence" speed="87" chest="50"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="78 995"/>
                      <Vehicles class="muscle" name="Faction-Donk" places="2" src={DonkFaction} alt="Faction-Donk" fuel="Essence" speed="87" chest="99"
                                srcBrand={Willard} altBrand="Willard" brand="Willard" train="RWD" price="78 999"/>
                      <Vehicles class="coupe" name="Sentinel Classic" places="2" src={SentinelClassic} alt="Sentinel Classic" fuel="Essence" speed="87" chest="84"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="79 990"/>
                      <Vehicles class="sportsclassic" name="190Z" places="2" src={Z} alt="190Z" fuel="Essence" speed="87" chest="55"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="79 990"/>
                      <Vehicles class="muscle" name="SlamTruck" places="2" src={SlamTruck} alt="SlamTruck" fuel="Essence" speed="78" chest="132"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="79 999"/>
                      {/* 80K to 90K */}
                      <Vehicles class="muscle" name="Dominator-GTT" places="2" src={GTTDominator} alt="Dominator-GTT" fuel="Essence" speed="91" chest="113"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="84 520"/>
                      <Vehicles class="muscle" name="Buffalo STX" places="4" src={BuffaloSTX} alt="Buffalo STX" fuel="Essence" speed="95" chest="120"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="84 983"/>
                      <Vehicles class="sedan" name="Cinquemila" places="4" src={Cinquemila} alt="Cinquemila" fuel="Essence" speed="96" chest="80"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="94 999"/>
                      {/* 90K to 100K */}
                      {/* 100K to 110K */}
                      {/* 110K to 120K */}
                      <Vehicles class="sedan" name="Cognoscenti 55" places="4" src={Cognoscenti55} alt="Cognoscenti 55" fuel="Essence" speed="90" chest="95"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="119 990"/>
                      <Vehicles class="sportsclassic" name="Mamba" places="2" src={Mamba} alt="Mamba" fuel="Essence" speed="92" chest="47"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="119 998"/>
                      {/* 120K to 130K */}
                      <Vehicles class="sportsclassic" name="Monroe" places="2" src={Monroe} alt="Monroe" fuel="Essence" speed="93" chest="55"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="124 997"/>
                      <Vehicles class="sportsclassic" name="Stirling GT" places="2" src={StirlingGT} alt="Stirling GT" fuel="Essence" speed="86" chest="43"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="126 990"/>
                      <Vehicles class="sportsclassic" name="Torero" places="2" src={Torero} alt="Torero" fuel="Essence" speed="93" chest="55"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="129 699"/>
                      {/* 130K to 140K */}
                      <Vehicles class="sportsclassic" name="Cheetah Classic" places="2" src={CheetahClassic} alt="Cheetah Classic" fuel="Essence" speed="95" chest="63"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="139 950"/>
                      <Vehicles class="sedan" name="Deity" places="4" src={Deity} alt="Deity" fuel="Essence" speed="93" chest="86"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="139 965"/>
                      <Vehicles class="sedan" name="Super Diamond" places="4" src={SuperDiamond} alt="Super Diamond" fuel="Essence" speed="90" chest="60"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="139 990"/>
                      <Vehicles class="sportsclassic" name="Turismo Classic" places="2" src={TurismoClassic} alt="Turismo Classic" fuel="Essence" speed="95" chest="55"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="139 999"/>
                      {/* 140K to 150K */}
                      <Vehicles class="sedan" name="Cognoscenti" places="4" src={Cognoscenti} alt="Cognoscenti" fuel="Essence" speed="87" chest="86"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="149 980"/>
                      {/* 150K to 160K */}
                      {/* 160K to 170K */}
                      <Vehicles class="coupe" name="Windsor" places="2" src={Windsor} alt="Windsor" fuel="Essence" speed="93" chest="103"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="169 999"/>
                      {/* 170K to 180K */}
                      <Vehicles class="coupe" name="Windsor Drop" places="4" src={WindsorDrop} alt="WindsorDrop" fuel="Essence" speed="93" chest="95"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="174 990"/>
                      <Vehicles class="muscle" name="Hermes" places="2" src={Hermes} alt="Hermes" fuel="Essence" speed="85" chest="87"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="179 992"/>
                      {/* 180K to 190K */}
                      {/* 190K to 200K */}
                      {/* 200K + */}
                      <Vehicles class="coupe" name="Champion" places="2" src={Champion} alt="Champion" fuel="Essence" speed="100" chest="86"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="213 965"/>
                      <Vehicles class="sportsclassic" name="Infernus Classic" places="2" src={InfernusClassic} alt="Infernus Classic" fuel="Essence" speed="93" chest="74"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="213 965"/>
                      <Vehicles class="sedan" name="Stretch" places="4" src={Stretch} alt="Stretch" fuel="Essence" speed="84" chest="104"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="239 999"/>
                      <Vehicles class="sedan" name="Stafford" places="4" src={Stafford} alt="Stafford" fuel="Essence" speed="75" chest="68"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="240 000"/>
                      <Vehicles class="sportsclassic" name="ZType" places="2" src={ZType} alt="ZType" fuel="Essence" speed="96" chest="47"
                                srcBrand={Truffade} altBrand="Truffade" brand="Truffade" train="RWD" price="280 000"/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default PDM;