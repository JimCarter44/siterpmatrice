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
        let sportclassic = $(".sportclassique");
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
            else if (filterType.val() === "sportclassic") {
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
                          <option value="sportclassic" className="optionCSSPDM">Sports Classiques</option>
                          <option value="muscle" className="optionCSSPDM">Muscles</option>
                          <option value="supers" className="optionCSSPDM">Supers</option>
                          <option value="van" className="optionCSSPDM">Vans</option>
                      </select>
                  </div>
                  <div id="catalog">
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
                      <Vehicles class="compact" name="Dilettante" places="4" src={Dilettante} alt="Dilettante" fuel="Electric" speed="85" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="FWD" price="2 979"/>
                      <Vehicles class="compact" name="Panto" places="2" src={Panto} alt="Panto" fuel="Essence" speed="82" chest="38"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="3 490"/>
                      <Vehicles class="compact" name="Prairie" places="2" src={Prairie} alt="Prairie" fuel="Essence" speed="84" chest="87"
                                srcBrand={Bollokan} altBrand="Bollokan" brand="Bollokan" train="FWD" price="5 690"/>
                      <Vehicles class="motorcycle" name="Manchez" places="2" src={Manchez} alt="Manchez" fuel="Essence" speed="75" chest="0"
                                srcBrand={Maibatsu} altBrand="Maibatsu" brand="Maibatsu" train="RWD" price="7 190"/>
                      <Vehicles class="compact" name="Brioso-300" places="2" src={Brioso300} alt="Brioso-300" fuel="Essence" speed="72" chest="45"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="7 320"/>
                      <Vehicles class="compact" name="Issi-Classique" places="2" src={IssisClassique} alt="Issi-Classique" fuel="Essence" speed="78" chest="43"
                                srcBrand={Weeny} altBrand="Weeny" brand="Weeny" train="FWD" price="7 329"/>
                      <Vehicles class="compact" name="Asbo" places="2" src={Asbo} alt="Asbo" fuel="Essence" speed="78" chest="60"
                                srcBrand={Maxwell} altBrand="Maxwell" brand="Maxwell" train="FWD" price="9 290"/>
                      <Vehicles class="compact" name="Rhapsody" places="2" src={Rhapsody} alt="Rhapsody" fuel="Essence" speed="83" chest="56"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="11 995"/>
                      <Vehicles class="compact" name="Club" places="2" src={Club} alt="Club" fuel="Essence" speed="87" chest="75"
                                srcBrand={BF} altBrand="BF" brand="BF" train="FWD" price="14 980"/>
                      <Vehicles class="offroad" name="Bifta" places="2" src={Bifta} alt="Bifta" fuel="Essence" speed="70" chest="50"
                                srcBrand={BF} altBrand="BF" brand="BF" train="RWD" price="14 990"/>
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
                      <Vehicles class="suv" name="Mesa" places="4" src={Mesa} alt="Mesa" fuel="Essence" speed="92" chest="95"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="28 059"/>
                      <Vehicles class="coupe" name="Oracle XS" places="4" src={OracleXS} alt="Oracle XS" fuel="Essence" speed="94" chest="113"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermatch" train="RWD" price="33 520"/>
                      <Vehicles class="muscle" name="Blade" places="2" src={Blade} alt="Blade" fuel="Essence" speed="90" chest="102"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="33 870"/>
                      <Vehicles class="coupe" name="Sentinel" places="2" src={Sentinel} alt="Sentinel" fuel="Essence" speed="88" chest="92"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="34 110"/>
                      <Vehicles class="muscle" name="Duke" places="2" src={Duke} alt="Duke" fuel="Essence" speed="89" chest="106"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="34 540"/>
                      <Vehicles class="coupe" name="Sentinel XS" places="2" src={SentinelXS} alt="SentinelXS" fuel="Essence" speed="88" chest="87"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="34 550"/>
                      <Vehicles class="muscle" name="Buccaneer" places="2" src={Buccaneer} alt="Buccaneer" fuel="Essence" speed="90" chest="108"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="34 980"/>
                      <Vehicles class="coupe" name="Futo" places="2" src={Futo} alt="Futo" fuel="Essence" speed="84" chest="90"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="35 930"/>
                      <Vehicles class="compact" name="Blista-Kanjo" places="2" src={BlistaKanjo} alt="Blista-Kanjo" fuel="Essence" speed="86" chest="65"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="FWD" price="37 930"/>
                      <Vehicles class="coupe" name="Zion" places="2" src={Zion} alt="Zion" fuel="Essence" speed="90" chest="98"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="42 990"/>
                      <Vehicles class="coupe" name="Zion Cabrio" places="2" src={ZionCab} alt="Zion Cab" fuel="Essence" speed="90" chest="88"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermatch" train="RWD" price="43 529"/>
                      <Vehicles class="coupe" name="Jackal" places="4" src={Jackal} alt="Jackal" fuel="Essence" speed="105" chest="110"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="RWD" price="43 997"/>
                      <Vehicles class="coupe" name="Felon" places="4" src={Felon} alt="Felon" fuel="Essence" speed="90" chest="95"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="44 992"/>
                      <Vehicles class="coupe" name="FelonGT" places="2" src={FelonGT} alt="FelonGT" fuel="Essence" speed="90" chest="87"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="45 997"/>
                      <Vehicles class="coupe" name="Previon" places="2" src={Previon} alt="Previon" fuel="Essence" speed="92" chest="89"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="51 190"/>
                      <Vehicles class="coupe" name="Exemplar" places="4" src={Exemplar} alt="Exemplar" fuel="Essence" speed="90" chest="115"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="75 999"/>
                      <Vehicles class="coupe" name="Cognoscenti-Cabrio" places="2" src={CognoscentiCabrio} alt="Cognoscenti-Cabrio" fuel="Essence" speed="90" chest="120"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="77 970"/>
                      <Vehicles class="coupe" name="F620" places="2" src={F620} alt="F620" fuel="Essence" speed="90" chest="105"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="RWD" price="78 893"/>
                      <Vehicles class="coupe" name="Sentinel Classic" places="2" src={SentinelClassic} alt="Sentinel Classic" fuel="Essence" speed="87" chest="84"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="79 990"/>
                      <Vehicles class="muscle" name="Buffalo STX" places="4" src={BuffaloSTX} alt="Buffalo STX" fuel="Essence" speed="95" chest="120"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="84 983"/>
                      <Vehicles class="coupe" name="Windsor" places="2" src={Windsor} alt="Windsor" fuel="Essence" speed="93" chest="103"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="169 999"/>
                      <Vehicles class="coupe" name="Windsor Drop" places="4" src={WindsorDrop} alt="WindsorDrop" fuel="Essence" speed="93" chest="95"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="174 990"/>
                      <Vehicles class="coupe" name="Champion" places="2" src={Champion} alt="Champion" fuel="Essence" speed="100" chest="86"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="213 965"/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default PDM;