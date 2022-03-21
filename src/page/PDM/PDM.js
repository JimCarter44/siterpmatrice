import './PDM.css';
import Navigator from "../../component/Navigator/Navigator"
import $ from "jquery";
import imgPDMHead from "../../img/imgPDMHead.png"
import Vehicles from "../../component/Vehicles/Vehicles"
import ToTop from "../../component/ToTop/ToTop"

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
import Brute from "../../img/pdmImg/brute.png"
import Nagasaki from "../../img/pdmImg/nagasaki.png"
import Coil from "../../img/pdmImg/coil.png"
import Annis from "../../img/pdmImg/annis.png"
import Pfister from "../../img/pdmImg/pfister.png"
import Gallivanter from "../../img/pdmImg/gallivanter.png"
import Fathom from "../../img/pdmImg/fathom.png"
import EmperorBrand from "../../img/pdmImg/emperor.png"
import Mammoth from "../../img/pdmImg/mammoth.png"
import Lcc from "../../img/pdmImg/lcc.png"
import Western from "../../img/pdmImg/western.png"
import Shitzu from "../../img/pdmImg/shitzu.png"
import Principe from "../../img/pdmImg/principe.png"
import Overflod from "../../img/pdmImg/overflod.png"
import Progen from "../../img/pdmImg/progen.png"
import Hijak from "../../img/pdmImg/hijak.png"
import Vysser from "../../img/pdmImg/vysser.png"

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
import RapidGTClassic from "../../img/pdmImg/rapid-gt-classic.webp"
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
import Surfer from "../../img/pdmImg/surfer.webp"
import Youga from "../../img/pdmImg/youga.jpg"
import YougaClassic from "../../img/pdmImg/youga-classic.webp"
import Youga4X4 from "../../img/pdmImg/youga-classic-4x4.webp"
import Bison from "../../img/pdmImg/bison.webp"
import BobcatXL from "../../img/pdmImg/bobcat-xl.webp"
import Burrito from "../../img/pdmImg/burrito-lsdwp.webp"
import Camper from "../../img/pdmImg/camper.webp"
import BurritoGang from "../../img/pdmImg/gang-burrito.webp"
import Journey from "../../img/pdmImg/journey.webp"
import BurritoLost from "../../img/pdmImg/burrito-lost.webp"
import Minivan from "../../img/pdmImg/minivan.webp"
import MinivanCustom from "../../img/pdmImg/minivan-custom.webp"
import Moonbeam from "../../img/pdmImg/moonbeam.webp"
import MoonBeamCustom from "../../img/pdmImg/moonbeam-custom.webp"
import Paradise from "../../img/pdmImg/paradise.webp"
import Rumpo from "../../img/pdmImg/rumpo.webp"
import RumpoCustom from "../../img/pdmImg/rumpo-custom.webp"
import Speedo from "../../img/pdmImg/speedo.webp"
import Blazer from "../../img/pdmImg/blazer.webp"
import BlazerSport from "../../img/pdmImg/street-blazer.webp"
import Bodhi from "../../img/pdmImg/bodhi.webp"
import Brawler from "../../img/pdmImg/brawler.webp"
import Caracara4X4 from "../../img/pdmImg/caracara-4x4.webp"
import Dubsta6X6 from "../../img/pdmImg/dubsta-6x6.webp"
import DuneBuggy from "../../img/pdmImg/dune-buggy.webp"
import Duneloader from "../../img/pdmImg/duneloader.webp"
import Everon from "../../img/pdmImg/everon.webp"
import Freecrawler from "../../img/pdmImg/freecrawler.webp"
import Guardian from "../../img/pdmImg/guardian.webp"
import Hellion from "../../img/pdmImg/hellion.webp"
import Injection from "../../img/pdmImg/injection.webp"
import Kalahari from "../../img/pdmImg/kalahari.webp"
import Kamacho from "../../img/pdmImg/kamacho.webp"
import MesaII from "../../img/pdmImg/mesa-merryweather.webp"
import Outlaw from "../../img/pdmImg/outlaw.webp"
import RancherXL from "../../img/pdmImg/rancher-xl.webp"
import Rebel from "../../img/pdmImg/rebel.webp"
import RebelRusty from "../../img/pdmImg/rebel-rusty.webp"
import Riata from "../../img/pdmImg/riata.webp"
import Sadler from "../../img/pdmImg/sadler.webp"
import SandkingXL from "../../img/pdmImg/sandking-xl.webp"
import SandkingSWB from "../../img/pdmImg/sandking-xl.webp"
import Vagrant from "../../img/pdmImg/vagrant.webp"
import Verus from "../../img/pdmImg/verus.webp"
import Winky from "../../img/pdmImg/winky.webp"
import YosemiteRancher from "../../img/pdmImg/yosemite-rancher.webp"
import Astron from "../../img/pdmImg/astron.webp"
import Baller from "../../img/pdmImg/baller.webp"
import BallerII from "../../img/pdmImg/baller-2.webp"
import BallerLE from "../../img/pdmImg/baller-le.webp"
import BallerLELWB from "../../img/pdmImg/baller-le-lwb.webp"
import BallerST from "../../img/pdmImg/baller-st.webp"
import BeeJayXL from "../../img/pdmImg/beejay-xl.webp"
import Cavalcade from "../../img/pdmImg/cavalcade.webp"
import CavalcadeII from "../../img/pdmImg/cavalcade-2.webp"
import Contender from "../../img/pdmImg/contender.webp"
import Dubsta from "../../img/pdmImg/dubsta.webp"
import DubstaII from "../../img/pdmImg/dubsta-2.webp"
import FQII from "../../img/pdmImg/fq-2.webp"
import Granger from "../../img/pdmImg/granger.webp"
import Granger3600LX from "../../img/pdmImg/granger-3600lx.webp"
import Gresley from "../../img/pdmImg/gresley.webp"
import Habanero from "../../img/pdmImg/habanero.webp"
import HuntleyS from "../../img/pdmImg/huntley-s.webp"
import IWagen from "../../img/pdmImg/iwagen.webp"
import Jubilee from "../../img/pdmImg/jubilee.webp"
import Landstalker from "../../img/pdmImg/landstalker.webp"
import LandstalkerXL from "../../img/pdmImg/landstalker-xl.webp"
import Novak from "../../img/pdmImg/novak.webp"
import Patriot from "../../img/pdmImg/patriot.webp"
import Radius from "../../img/pdmImg/radius.webp"
import ReblaGTS from "../../img/pdmImg/rebla-gts.webp"
import Rocoto from "../../img/pdmImg/rocoto.webp"
import Seminole from "../../img/pdmImg/seminole.webp"
import SeminoleFrontier from "../../img/pdmImg/seminole-frontier.webp"
import Serrano from "../../img/pdmImg/serrano.webp"
import Toros from "../../img/pdmImg/toros.webp"
import XLS from "../../img/pdmImg/xls.webp"
import Akuma from "../../img/pdmImg/akuma.jpg"
import Avarus from "../../img/pdmImg/avarus.jpg"
import Bagger from "../../img/pdmImg/bagger.jpg"
import Bati801 from "../../img/pdmImg/bati-801.webp"
import Bati801RR from "../../img/pdmImg/bati-801rr.jpg"
import BF400 from "../../img/pdmImg/bf400.jpg"
import CarbonRS from "../../img/pdmImg/carbon-rs.jpg"
import Chimera from "../../img/pdmImg/chimera.jpg"
import Cliffhanger from "../../img/pdmImg/cliffhanger.jpg"
import Daemon from "../../img/pdmImg/daemon.jpg"
import DaemonCustom from "../../img/pdmImg/daemon-custom.jpg"
import Defiler from "../../img/pdmImg/defiler.jpg"
import Diabolus from "../../img/pdmImg/diabolus.webp"
import DiabolusCustom from "../../img/pdmImg/diabolus-custom.jpg"
import DoubleT from "../../img/pdmImg/double-t.webp"
import Enduro from "../../img/pdmImg/enduro.webp"
import Esskey from "../../img/pdmImg/esskey.jpg"
import Faggio from "../../img/pdmImg/faggio.jpg"
import FaggioMod from "../../img/pdmImg/faggio-mod.jpg"
import FaggioSport from "../../img/pdmImg/faggio-sport.jpg"
import FCR1000 from "../../img/pdmImg/fcr-1000.jpg"
import FCR1000Custom from "../../img/pdmImg/fcr-1000-custom.jpg"
import Gargoyle from "../../img/pdmImg/gargoyle.jpg"
import Hakuchou from "../../img/pdmImg/hakuchou.webp"
import HakuchouDrag from "../../img/pdmImg/hakuchou-drag-bike.webp"
import Hexer from "../../img/pdmImg/hexer.jpg"
import Innovation from "../../img/pdmImg/innovation.jpg"
import Lectro from "../../img/pdmImg/lectro.jpg"
import ManchezScout from "../../img/pdmImg/manchez-scout.jpg"
import Nemesis from "../../img/pdmImg/nemesis.jpg"
import Nightblade from "../../img/pdmImg/nemesis.jpg"
import PCJ600 from "../../img/pdmImg/pcj-600.webp"
import RatBike from "../../img/pdmImg/rat-bike.jpg"
import Reever from "../../img/pdmImg/reever.webp"
import Ruffian from "../../img/pdmImg/ruffian.webp"
import Sanchez from "../../img/pdmImg/sanchez.jpg"
import SanchezII from "../../img/pdmImg/sanchez-livery.webp"
import Sanctus from "../../img/pdmImg/sanctus.jpg"
import Shinobi from "../../img/pdmImg/shinobi.webp"
import Sovereign from "../../img/pdmImg/sovereign.jpg"
import Stryder from "../../img/pdmImg/stryder.jpg"
import Thrust from "../../img/pdmImg/thrust.webp"
import Vader from "../../img/pdmImg/vader.jpg"
import Vindicator from "../../img/pdmImg/vindicator.jpg"
import Vortex from "../../img/pdmImg/vortex.webp"
import Wolfsbane from "../../img/pdmImg/wolfsbane.jpg"
import ZombieBobber from "../../img/pdmImg/zombie-bobber.jpg"
import ZombieChopper from "../../img/pdmImg/zombie-bobber.jpg"
import Height11 from "../../img/pdmImg/811.webp"
import Adder from "../../img/pdmImg/adder.webp"
import Autarch from "../../img/pdmImg/autarch.webp"
import Banshee900RR from "../../img/pdmImg/banshee-900r.webp"
import Bullet from "../../img/pdmImg/bullet.webp"
import Cheetah from "../../img/pdmImg/cheetah.webp"
import Cyclone from "../../img/pdmImg/cyclone.webp"
import DevesteEight from "../../img/pdmImg/deveste-eight.webp"
import Emerus from "../../img/pdmImg/emerus.webp"
import EntityXF from "../../img/pdmImg/entity-xf.webp"
import EntityXXR from "../../img/pdmImg/entity-xxr.webp"
import ETR1 from "../../img/pdmImg/etr1.webp"
import FMJ from "../../img/pdmImg/fmj.webp"
import Furia from "../../img/pdmImg/furia.webp"
import GP1 from "../../img/pdmImg/gp1.webp"
import Infernus from "../../img/pdmImg/infernus.webp"
import Ignus from "../../img/pdmImg/ignus.webp"
import ItaliGTB from "../../img/pdmImg/itali-gtb.webp"
import ItaliGTBCustom from "../../img/pdmImg/itali-gtb-custom.webp"
import Krieger from "../../img/pdmImg/krieger.webp"
import Nero from "../../img/pdmImg/nero.webp"
import NeroCustom from "../../img/pdmImg/nero-custom.webp"
import Osiris from "../../img/pdmImg/osiris.webp"
import Penetrator from "../../img/pdmImg/penetrator.webp"
import Reaper from "../../img/pdmImg/reaper.webp"
import RE7B from "../../img/pdmImg/re-7b.webp"
import S80RR from "../../img/pdmImg/s80rr.webp"
import SC1 from "../../img/pdmImg/sc1.webp"
import T20 from "../../img/pdmImg/t20.webp"
import Taipan from "../../img/pdmImg/taipan.webp"
import Tempesta from "../../img/pdmImg/tempesta.webp"
import Tezeract from "../../img/pdmImg/tezeract.webp"
import Thrax from "../../img/pdmImg/thrax.webp"
import Tigon from "../../img/pdmImg/tigon.webp"
import TurismoR from "../../img/pdmImg/turismo-r.webp"
import Tyrant from "../../img/pdmImg/tyrant.webp"
import Tyrus from "../../img/pdmImg/tyrus.webp"
import Vacca from "../../img/pdmImg/vacca.webp"
import Vagner from "../../img/pdmImg/vagner.webp"
import Voltic from "../../img/pdmImg/voltic.webp"
import X80Proto from "../../img/pdmImg/x80-proto.webp"
import XA21 from "../../img/pdmImg/xa-21.webp"
import Zentorno from "../../img/pdmImg/zentorno.webp"
import Zeno from "../../img/pdmImg/zeno.webp"
import Zorrusso from "../../img/pdmImg/zorrusso.webp"
import FDrafter from "../../img/pdmImg/drafter-8f.webp"
import F9 from "../../img/pdmImg/9f.webp"
import F9Cabrio from "../../img/pdmImg/9f-cabrio.webp"
import Alpha from "../../img/pdmImg/alpha.webp"
import Banshee from "../../img/pdmImg/banshee.webp"
import BestiaGTS from "../../img/pdmImg/bestia-gts.webp"
import BlistaCompact from "../../img/pdmImg/blista-compact.webp"
import Buffalo from "../../img/pdmImg/buffalo.webp"
import BuffaloS from "../../img/pdmImg/buffalo-s.webp"
import CalicoGTF from "../../img/pdmImg/CalicoGTF.webp"
import Carbonizzare from "../../img/pdmImg/carbonizzare.webp"
import Comet from "../../img/pdmImg/comet.webp"
import CometRetroCustom from "../../img/pdmImg/comet-retro-custom.webp"
import CometS2 from "../../img/pdmImg/comet-s2.webp"
import CometS2Cabrio from "../../img/pdmImg/comet-s2-cabrio.webp"
import CometSafari from "../../img/pdmImg/comet-safari.webp"
import CometSR from "../../img/pdmImg/comet-sr.webp"
import Coquette from "../../img/pdmImg/coquette.webp"
import CoquetteD10 from "../../img/pdmImg/coquette-d10.webp"
import Cypher from "../../img/pdmImg/cypher.webp"
import ElegyRetroCustom from "../../img/pdmImg/elegy-retro-custom.webp"
import ElegyRH8 from "../../img/pdmImg/elegy-rh8.webp"
import Euros from "../../img/pdmImg/euros.webp"
import Feltzer from "../../img/pdmImg/feltzer.webp"
import FlashGT from "../../img/pdmImg/flash-gt.webp"
import FuroreGT from "../../img/pdmImg/furore-gt.webp"
import Fusilade from "../../img/pdmImg/fusilade.webp"
import FutoGTX from "../../img/pdmImg/futo-gtx.webp"
import GB200 from "../../img/pdmImg/gb200.webp"
import Growler from "../../img/pdmImg/growler.webp"
import Imorgon from "../../img/pdmImg/imorgon.webp"
import IssiSport from "../../img/pdmImg/issi-sport.webp"
import ItaliGTO from "../../img/pdmImg/itali-gto.webp"
import ItaliRSX from "../../img/pdmImg/itali-rsx.webp"
import Jester from "../../img/pdmImg/jester.webp"
import JesterClassic from "../../img/pdmImg/jester-classic.webp"
import JesterRR from "../../img/pdmImg/jester-rr.webp"
import Jugular from "../../img/pdmImg/jugular.webp"
import Khamelion from "../../img/pdmImg/khamelion.webp"
import Komoda from "../../img/pdmImg/komoda.webp"
import Kuruma from "../../img/pdmImg/kuruma.webp"
import Locust from "../../img/pdmImg/locust.webp"
import Lynx from "../../img/pdmImg/lynx.webp"
import Massacro from "../../img/pdmImg/massacro.webp"
import Neo from "../../img/pdmImg/neo.webp"
import Omnis from "../../img/pdmImg/omnis.webp"
import Paragon from "../../img/pdmImg/paragon-r.webp"
import Pariah from "../../img/pdmImg/pariah.webp"
import Penumbra from "../../img/pdmImg/penumbra.webp"
import PenumbraFF from "../../img/pdmImg/penumbra-ff.webp"
import Raiden from "../../img/pdmImg/raiden.webp"
import RapidGT from "../../img/pdmImg/rapid-gt.webp"
import RapidGTCab from "../../img/pdmImg/rapid-gt-sports.webp"
import Remus from "../../img/pdmImg/remus.webp"
import Revolter from "../../img/pdmImg/revolter.webp"
import RT3000 from "../../img/pdmImg/rt3000.webp"
import Ruston from "../../img/pdmImg/ruston.webp"
import SchafterLWB from "../../img/pdmImg/schafter-lwb.webp"
import SchafterV12 from "../../img/pdmImg/schafter-v12.webp"
import SchlagenGT from "../../img/pdmImg/schlagen-gt.webp"
import Schwartzer from "../../img/pdmImg/schwartzer.webp"
import Seven70 from "../../img/pdmImg/seven-70.webp"
import Specter from "../../img/pdmImg/specter.webp"
import Streiter from "../../img/pdmImg/streiter.webp"
import Sugoi from "../../img/pdmImg/sugoi.webp"
import Sultan from "../../img/pdmImg/sultan.webp"
import SultanClassic from "../../img/pdmImg/sultan-classic.webp"
import SultanRSClassic from "../../img/pdmImg/sultan-rs-classic.webp"
import SultanRS from "../../img/pdmImg/sultan-rs.webp"
import Surano from "../../img/pdmImg/surano.webp"
import TroposRallye from "../../img/pdmImg/tropos-rallye.webp"
import VSTR from "../../img/pdmImg/v-str.webp"
import Vectre from "../../img/pdmImg/vectre.webp"
import Verlierer from "../../img/pdmImg/verlierer.webp"
import Visione from "../../img/pdmImg/visione.webp"
import ZR350 from "../../img/pdmImg/zr350.webp"
import Neon from "../../img/pdmImg/neon.webp"


function PDM() {
    $( function() {
        let muscle = $(".muscle");
        let cycle = $(".cycle");
        let motorcycle = $(".motorcycles");
        let compact = $(".compact");
        let sedan = $(".sedan");
        let suv = $(".suvs");
        let offroad = $(".offroad");
        let coupe = $(".coupe");
        let sport = $(".sport");
        let sportclassic = $(".sportsclassic");
        let supers = $(".super");
        let van = $(".vans");
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
              <img src={imgPDMHead} alt="PDM brand"/>
          </div>
          <div className="rentalPDM">
              <ToTop />
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
                      <Vehicles class="motorcycles" name="Faggio Sport" places="2" src={FaggioSport} alt="Faggio Sport" fuel="Essence" speed="59" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="2 390"/>
                      <Vehicles class="motorcycles" name="Faggio" places="2" src={Faggio} alt="Faggio" fuel="Essence" speed="56" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="2 490"/>
                      <Vehicles class="sportsclassic" name="TornadoRatRod" places="2" src={TornadoRatRod} alt="TornadoRatRod" fuel="Essence" speed="80" chest="62"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="2 590"/>
                      <Vehicles class="motorcycles" name="Faggio Mod" places="2" src={FaggioMod} alt="Faggio Mod" fuel="Essence" speed="56" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="2 590"/>
                      <Vehicles class="sportsclassic" name="Tornado Mariachi Cab" places="2" src={TornadoMariachiCab} alt="Tornado Mariachi Cab" fuel="Essence" speed="81" chest="62"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="2 890"/>
                      <Vehicles class="offroad" name="Kalahari" places="2" src={Kalahari} alt="Kalahari" fuel="Essence" speed="75" chest="60"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="2 890"/>
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
                      <Vehicles class="vans" name="Journey" places="6" src={Journey} alt="Journey" fuel="Essence" speed="63" chest="105"
                                srcBrand={Zirconium} altBrand="Zirconium" brand="Zirconium" train="FWD" price="4 993"/>
                      <Vehicles class="offroad" name="Dune Buggy" places="2" src={DuneBuggy} alt="Dune Buggy" fuel="Essence" speed="84" chest="0"
                                srcBrand={BF} altBrand="BF" brand="BF" train="RWD" price="5 099"/>
                      <Vehicles class="motorcycles" name="Enduro" places="2" src={Enduro} alt="Enduro" fuel="Essence" speed="74" chest="0"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="RWD" price="5 199"/>
                      <Vehicles class="vans" name="Surfer" places="2" src={Surfer} alt="Surfer" fuel="Essence" speed="63" chest="105"
                                srcBrand={BF} altBrand="BF" brand="BF" train="RWD" price="5 379"/>
                      <Vehicles class="muscle" name="Manana" places="2" src={Manana} alt="Manana" fuel="Essence" speed="81" chest="78"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="5 390"/>
                      <Vehicles class="motorcycles" name="Rat Bike" places="2" src={RatBike} alt="Rat Bike" fuel="Essence" speed="81" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="5 390"/>
                      <Vehicles class="offroad" name="Injection" places="2" src={Injection} alt="Injection" fuel="Essence" speed="81" chest="35"
                                srcBrand={BF} altBrand="BF" brand="BF" train="RWD" price="5 490"/>
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
                      <Vehicles class="motorcycles" name="Sanchez" places="2" src={Sanchez} alt="Sanchez" fuel="Essence" speed="74" chest="0"
                                srcBrand={Maibatsu} altBrand="Maibatsu" brand="Maibatsu" train="RWD" price="7 190"/>
                      <Vehicles class="motorcycles" name="Sanchez II" places="2" src={SanchezII} alt="Sanchez II" fuel="Essence" speed="74" chest="0"
                                srcBrand={Maibatsu} altBrand="Maibatsu" brand="Maibatsu" train="RWD" price="7 290"/>
                      <Vehicles class="compact" name="Brioso-300" places="2" src={Brioso300} alt="Brioso-300" fuel="Essence" speed="72" chest="45"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="7 320"/>
                      <Vehicles class="compact" name="Issi-Classique" places="2" src={IssisClassique} alt="Issi-Classique" fuel="Essence" speed="78" chest="43"
                                srcBrand={Weeny} altBrand="Weeny" brand="Weeny" train="FWD" price="7 329"/>
                      <Vehicles class="sedan" name="Stratum" places="4" src={Stratum} alt="Stratum" fuel="Essence" speed="84" chest="114"
                                srcBrand={Zirconium} altBrand="Zirconium" brand="Zirconium" train="AWD" price="7 892"/>
                      <Vehicles class="offroad" name="Blazer" places="1" src={Blazer} alt="Blazer" fuel="Essence" speed="75" chest="0"
                                srcBrand={Nagasaki} altBrand="Nagasaki" brand="Nagasaki" train="AWD" price="7 980"/>
                      <Vehicles class="offroad" name="Blazer Sport" places="1" src={BlazerSport} alt="Blazer Sport" fuel="Essence" speed="78" chest="0"
                                srcBrand={Nagasaki} altBrand="Nagasaki" brand="Nagasaki" train="AWD" price="9 250"/>
                      <Vehicles class="compact" name="Asbo" places="2" src={Asbo} alt="Asbo" fuel="Essence" speed="78" chest="60"
                                srcBrand={Maxwell} altBrand="Maxwell" brand="Maxwell" train="FWD" price="9 290"/>
                      <Vehicles class="muscle" name="SlamVan" places="2" src={SlamVan} alt="SlamVan" fuel="Essence" speed="84" chest="126"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="9 990"/>
                      <Vehicles class="offroad" name="Bodhi" places="4" src={Bodhi} alt="Bodhi" fuel="Essence" speed="84" chest="74"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="9 990"/>
                      <Vehicles class="offroad" name="Rebel Rusty" places="2" src={RebelRusty} alt="Rebel Rusty" fuel="Essence" speed="75" chest="78"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="9 990"/>
                      <Vehicles class="sedan" name="Glendale" places="4" src={Glendale} alt="Glendale" fuel="Essence" speed="91" chest="76"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="9 990"/>
                      <Vehicles class="offroad" name="Duneloader" places="2" src={Duneloader} alt="Duneloader" fuel="Essence" speed="63" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="9 997"/>
                      <Vehicles class="sportsclassic" name="Cheburek" places="2" src={Cheburek} alt="Cheburek" fuel="Essence" speed="87" chest="49"
                                srcBrand={Rune} altBrand="Rune" brand="Rune" train="RWD" price="9 999"/>
                      <Vehicles class="sportsclassic" name="Tornado" places="2" src={Tornado} alt="Tornado" fuel="Essence" speed="81" chest="64"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="9 999"/>
                      {/* 10K to 20K */}
                      <Vehicles class="motorcycles" name="Nemesis" places="2" src={Nemesis} alt="Nemesis" fuel="Essence" speed="87" chest="0"
                                srcBrand={Principe} altBrand="Principe" brand="Principe" train="RWD" price="10 190"/>
                      <Vehicles class="motorcycles" name="PCJ 600" places="2" src={PCJ600} alt="PCJ 600" fuel="Essence" speed="80" chest="0"
                                srcBrand={Shitzu} altBrand="Shitzu" brand="Shitzu" train="RWD" price="10 990"/>
                      <Vehicles class="motorcycles" name="Ruffian" places="2" src={Ruffian} alt="Ruffian" fuel="Essence" speed="87" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="11 990"/>
                      <Vehicles class="sportsclassic" name="Tornado Gang" places="2" src={TornadoGang} alt="Tornado Gang" fuel="Essence" speed="81" chest="62"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="11 990"/>
                      <Vehicles class="compact" name="Rhapsody" places="2" src={Rhapsody} alt="Rhapsody" fuel="Essence" speed="83" chest="56"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="11 995"/>
                      <Vehicles class="motorcycles" name="Manchez Scout" places="1" src={ManchezScout} alt="Manchez Scout" fuel="Essence" speed="75" chest="0"
                                srcBrand={Maibatsu} altBrand="Maibatsu" brand="Maibatsu" train="RWD" price="11 999"/>
                      <Vehicles class="muscle" name="Picador" places="2" src={Picador} alt="Picador" fuel="Essence" speed="84" chest="120"
                                srcBrand={Cheval} altBrand="Cheval" brand="Cheval" train="AWD" price="12 990"/>
                      <Vehicles class="offroad" name="Verus" places="2" src={Verus} alt="Verus" fuel="Essence" speed="85" chest="0"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="AWD" price="12 990"/>
                      <Vehicles class="motorcycles" name="Vader" places="2" src={Vader} alt="Vader" fuel="Essence" speed="87" chest="0"
                                srcBrand={Shitzu} altBrand="Shitzu" brand="Shitzu" train="RWD" price="12 990"/>
                      <Vehicles class="sedan" name="Primo" places="4" src={Primo} alt="Primo" fuel="Essence" speed="87" chest="96"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="12 995"/>
                      <Vehicles class="muscle" name="Voodoo Custom" places="2" src={CustomVoodoo} alt="Voodoo Custom" fuel="Essence" speed="80" chest="113"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="13 000"/>
                      <Vehicles class="motorcycles" name="Daemon" places="2" src={Daemon} alt="Daemon" fuel="Essence" speed="84" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="13 970"/>
                      <Vehicles class="sedan" name="Intruder" places="4" src={Intruder} alt="Intruder" fuel="Essence" speed="90" chest="91"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="13 992"/>
                      <Vehicles class="vans" name="Minivan" places="4" src={Minivan} alt="Minivan" fuel="Essence" speed="78" chest="105"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="13 999"/>
                      <Vehicles class="motorcycles" name="Daemon Custom" places="2" src={DaemonCustom} alt="Daemon Custom" fuel="Essence" speed="84" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="14 190"/>
                      <Vehicles class="compact" name="Club" places="2" src={Club} alt="Club" fuel="Essence" speed="87" chest="75"
                                srcBrand={BF} altBrand="BF" brand="BF" train="FWD" price="14 980"/>
                      <Vehicles class="offroad" name="Bifta" places="2" src={Bifta} alt="Bifta" fuel="Essence" speed="70" chest="50"
                                srcBrand={BF} altBrand="BF" brand="BF" train="RWD" price="14 990"/>
                      <Vehicles class="motorcycles" name="Esskey" places="2" src={Esskey} alt="Esskey" fuel="Essence" speed="90" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="14 992"/>
                      <Vehicles class="muscle" name="Phoenix" places="2" src={Phoenix} alt="Phoenix" fuel="Essence" speed="90" chest="89"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="14 995"/>
                      <Vehicles class="muscle" name="Virgo Classic" places="2" src={ClassicVirgo} alt="Virgo Classic" fuel="Essence" speed="84" chest="115"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="15 490"/>
                      <Vehicles class="sedan" name="Washington" places="4" src={Washington} alt="Washington" fuel="Essence" speed="87" chest="90"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="15 790"/>
                      <Vehicles class="motorcycles" name="Hexer" places="2" src={Hexer} alt="Hexer" fuel="Essence" speed="84" chest="0"
                                srcBrand={Lcc} altBrand="Lcc" brand="Lcc" train="RWD" price="15 950"/>
                      <Vehicles class="muscle" name="Virgo Classic Custom" places="2" src={CustomClassicVirgo} alt="Virgo Classic Custom" fuel="Essence" speed="84" chest="115"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="15 990"/>
                      <Vehicles class="suvs" name="Seminole" places="4" src={Seminole} alt="Seminole" fuel="Essence" speed="81" chest="80"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="15 990"/>
                      <Vehicles class="sedan" name="Stanier" places="4" src={Stanier} alt="Stanier" fuel="Essence" speed="80" chest="100"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="15 990"/>
                      <Vehicles class="motorcycles" name="Wolfsbane" places="2" src={Wolfsbane} alt="Wolfsbane" fuel="Essence" speed="81" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="16 990"/>
                      <Vehicles class="suvs" name="Habanero" places="4" src={Habanero} alt="Habanero" fuel="Essence" speed="85" chest="80"
                                srcBrand={EmperorBrand} altBrand="Emperor" brand="Emperor" train="AWD" price="16 992"/>
                      <Vehicles class="compact" name="Issi" places="2" src={Issi} alt="Issi" fuel="Essence" speed="83" chest="53"
                                srcBrand={Weeny} altBrand="Weeny" brand="Weeny" train="FWD" price="17 592"/>
                      <Vehicles class="vans" name="Paradise" places="4" src={Paradise} alt="Paradise" fuel="Essence" speed="81" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="17 980"/>
                      <Vehicles class="suvs" name="Landstalker" places="4" src={Landstalker} alt="Landstalker" fuel="Essence" speed="84" chest="80"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="AWD" price="17 990"/>
                      <Vehicles class="compact" name="Blista" places="2" src={Blista} alt="Blista" fuel="Essence" speed="84" chest="55"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="FWD" price="17 990"/>
                      <Vehicles class="compact" name="Brioso R/A" places="2" src={Brioso} alt="Brioso" fuel="Essence" speed="84" chest="63"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="18 990"/>
                      <Vehicles class="suvs" name="Radius" places="4" src={Radius} alt="Radius" fuel="Essence" speed="87" chest="80"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="19 190"/>
                      <Vehicles class="vans" name="Burrito" places="4" src={Burrito} alt="Burrito" fuel="Essence" speed="81" chest="105"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="19 890"/>
                      <Vehicles class="vans" name="Rumpo" places="2" src={Rumpo} alt="Rumpo" fuel="Essence" speed="81" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="19 970"/>
                      <Vehicles class="compact" name="Weevil" places="2" src={Weevil} alt="Weevil" fuel="Essence" speed="84" chest="62"
                                srcBrand={BF} altBrand="BF" brand="BF" train="RWD" price="19 990"/>
                      <Vehicles class="vans" name="Youga" places="2" src={Youga} alt="Youga" fuel="Essence" speed="75" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="19 990"/>
                      <Vehicles class="vans" name="Speedo" places="4" src={Speedo} alt="Speedo" fuel="Essence" speed="81" chest="105"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="19 999"/>
                      <Vehicles class="suvs" name="Serrano" places="4" src={Serrano} alt="Serrano" fuel="Essence" speed="81" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="AWD" price="19 999"/>
                      {/* 20K to 30k */}
                      <Vehicles class="muscle" name="Lurcher" places="2" src={Lurcher} alt="Lurcher" fuel="Essence" speed="90" chest="106"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="20 150"/>
                      <Vehicles class="vans" name="Youga Classic" places="4" src={YougaClassic} alt="Youga Classic" fuel="Essence" speed="75" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="21 591"/>
                      <Vehicles class="sedan" name="Warrener" places="4" src={Warrener} alt="Warrener" fuel="Essence" speed="87" chest="90"
                                srcBrand={Vulcar} altBrand="Vulcar" brand="Vulcar" train="RWD" price="21 690"/>
                      <Vehicles class="motorcycles" name="Lectro" places="2" src={Lectro} alt="Lectro" fuel="Essence" speed="87" chest="0"
                                srcBrand={Principe} altBrand="Principe" brand="Principe" train="RWD" price="21 980"/>
                      <Vehicles class="motorcycles" name="Sovereign" places="1" src={Sovereign} alt="Sovereign" fuel="Essence" speed="84" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="22 100"/>
                      <Vehicles class="muscle" name="SlamVan Lost" places="2" src={LostSlamVan} alt="SlamVan Lost" fuel="Essence" speed="84" chest="145"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="22 990"/>
                      <Vehicles class="sportsclassic" name="Peyote" places="2" src={Peyote} alt="Peyote" fuel="Essence" speed="81" chest="42"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="23 050"/>
                      <Vehicles class="vans" name="Bobcat XL" places="2" src={BobcatXL} alt="Bobcat XL" fuel="Essence" speed="81" chest="105"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="23 510"/>
                      <Vehicles class="muscle" name="Stalion" places="2" src={Stalion} alt="Stalion" fuel="Essence" speed="89" chest="97"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="23 979"/>
                      <Vehicles class="offroad" name="Rancher XL" places="1" src={RancherXL} alt="Rancher XL" fuel="Essence" speed="81" chest="60"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="AWD" price="23 980"/>
                      <Vehicles class="muscle" name="BurgerShot Stalion" places="2" src={BSStalion} alt="BurgerShot Stalion" fuel="Essence" speed="89" chest="94"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="24 510"/>
                      <Vehicles class="suvs" name="BeeJay XL" places="4" src={BeeJayXL} alt="BeeJay XL" fuel="Essence" speed="81" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="24 970"/>
                      <Vehicles class="muscle" name="Vigero" places="2" src={Vigero} alt="Vigero" fuel="Essence" speed="87" chest="103"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="24 980"/>
                      <Vehicles class="motorcycles" name="Bagger" places="2" src={Bagger} alt="Bagger" fuel="Essence" speed="81" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="25 060"/>
                      <Vehicles class="suvs" name="Cavalcade" places="4" src={Cavalcade} alt="Cavalcade" fuel="Essence" speed="79" chest="80"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="AWD" price="26 010"/>
                      <Vehicles class="suvs" name="Cavalcade II" places="4" src={CavalcadeII} alt="Cavalcade II" fuel="Essence" speed="79" chest="80"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="AWD" price="26 970"/>
                      <Vehicles class="sedan" name="Fugitive" places="4" src={Fugitive} alt="Fugitive" fuel="Essence" speed="90" chest="95"
                                srcBrand={Cheval} altBrand="Cheval" brand="Cheval" train="RWD" price="27 930"/>
                      <Vehicles class="motorcycles" name="Manchez" places="2" src={Manchez} alt="Manchez" fuel="Essence" speed="75" chest="0"
                                srcBrand={Maibatsu} altBrand="Maibatsu" brand="Maibatsu" train="RWD" price="27 940"/>
                      <Vehicles class="suvs" name="Mesa" places="4" src={Mesa} alt="Mesa" fuel="Essence" speed="92" chest="95"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="28 059"/>
                      <Vehicles class="muscle" name="Rat-Truck" places="2" src={TruckRat} alt="Rat-Truck" fuel="Essence" speed="84" chest="111"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="28 120"/>
                      <Vehicles class="motorcycles" name="BF400" places="2" src={BF400} alt="BF400" fuel="Essence" speed="90" chest="0"
                                srcBrand={Nagasaki} altBrand="Nagasaki" brand="Nagasaki" train="RWD" price="29 970"/>
                      {/* 30K to 40K */}
                      <Vehicles class="motorcycles" name="Avarus" places="1" src={Avarus} alt="Avarus" fuel="Essence" speed="84" chest="0"
                                srcBrand={Lcc} altBrand="Lcc" brand="Lcc" train="RWD" price="31 090"/>
                      <Vehicles class="vans" name="Moonbeam" places="4" src={Moonbeam} alt="Moonbeam" fuel="Essence" speed="78" chest="105"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="31 960"/>
                      <Vehicles class="sedan" name="Surge" places="4" src={Surge} alt="Surge" fuel="Electric" speed="87" chest="90"
                                srcBrand={Cheval} altBrand="Cheval" brand="Cheval" train="FWD" price="32 010"/>
                      <Vehicles class="muscle" name="Ruiner" places="2" src={Ruiner} alt="Ruiner" fuel="Essence" speed="90" chest="67"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="32 040"/>
                      <Vehicles class="motorcycles" name="Innovation" places="2" src={Innovation} alt="Innovation" fuel="Essence" speed="84" chest="0"
                                srcBrand={Lcc} altBrand="Lcc" brand="Lcc" train="RWD" price="32 150"/>
                      <Vehicles class="sportsclassic" name="Retinue" places="2" src={Retinue} alt="Retinue" fuel="Essence" speed="87" chest="41"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="32 840"/>
                      <Vehicles class="coupe" name="Oracle" places="4" src={Oracle} alt="Oracle" fuel="Essence" speed="94" chest="112"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermatch" train="RWD" price="32 950"/>
                      <Vehicles class="motorcycles" name="Akuma" places="2" src={Akuma} alt="Akuma" fuel="Essence" speed="90" chest="0"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="RWD" price="32 980"/>
                      <Vehicles class="offroad" name="Winky" places="3" src={Winky} alt="Winky" fuel="Essence" speed="56" chest="35"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="32 990"/>
                      <Vehicles class="muscle" name="Faction" places="2" src={Faction} alt="Faction" fuel="Essence" speed="87" chest="105"
                                srcBrand={Willard} altBrand="Willard" brand="Willard" train="RWD" price="32 990"/>
                      <Vehicles class="suvs" name="Gresley" places="4" src={Gresley} alt="Gresley" fuel="Essence" speed="84" chest="80"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="AWD" price="33 049"/>
                      <Vehicles class="sportsclassic" name="Retinue MKII" places="2" src={RetinueMKII} alt="Retinue MKII" fuel="Essence" speed="90" chest="42"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="33 510"/>
                      <Vehicles class="coupe" name="Oracle XS" places="4" src={OracleXS} alt="Oracle XS" fuel="Essence" speed="94" chest="96"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermatch" train="RWD" price="33 520"/>
                      <Vehicles class="muscle" name="Blade" places="2" src={Blade} alt="Blade" fuel="Essence" speed="90" chest="102"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="33 870"/>
                      <Vehicles class="sportsclassic" name="Michelli GT" places="2" src={MichelliGT} alt="Michelli GT" fuel="Essence" speed="87" chest="68"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="33 970"/>
                      <Vehicles class="motorcycles" name="Vortex" places="1" src={Vortex} alt="Vortex" fuel="Essence" speed="92" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="33 990"/>
                      <Vehicles class="offroad" name="Rebel" places="2" src={Rebel} alt="Rebel" fuel="Essence" speed="81" chest="78"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="34 010"/>
                      <Vehicles class="suvs" name="Huntley S" places="4" src={HuntleyS} alt="Huntley S" fuel="Essence" speed="85" chest="80"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="AWD" price="34 080"/>
                      <Vehicles class="coupe" name="Sentinel" places="2" src={Sentinel} alt="Sentinel" fuel="Essence" speed="88" chest="92"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="34 110"/>
                      <Vehicles class="sedan" name="Warrener HKR" places="4" src={WarrenerHKR} alt="Warrener HKR" fuel="Essence" speed="90" chest="90"
                                srcBrand={Vulcar} altBrand="Vulcar" brand="Vulcar" train="RWD" price="34 125"/>
                      <Vehicles class="muscle" name="Duke" places="2" src={Duke} alt="Duke" fuel="Essence" speed="89" chest="106"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="34 129"/>
                      <Vehicles class="coupe" name="Sentinel XS" places="2" src={SentinelXS} alt="SentinelXS" fuel="Essence" speed="88" chest="87"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="34 550"/>
                      <Vehicles class="sports" name="Buffalo" places="4" src={Buffalo} alt="Buffalo" fuel="Essence" speed="90" chest="80"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="34 960"/>
                      <Vehicles class="muscle" name="Dominator" places="2" src={Dominator} alt="Dominator" fuel="Essence" speed="90" chest="111"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="34 970"/>
                      <Vehicles class="muscle" name="Buccaneer" places="2" src={Buccaneer} alt="Buccaneer" fuel="Essence" speed="90" chest="108"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="34 980"/>
                      <Vehicles class="sports" name="Penumbra" places="2" src={Penumbra} alt="Penumbra" fuel="Essence" speed="87" chest="80"
                                srcBrand={Maibatsu} altBrand="Maibatsu" brand="Maibatsu" train="RWD" price="34 980"/>
                      <Vehicles class="sports" name="Blista Compact" places="2" src={BlistaCompact} alt="Blista Compact" fuel="Essence" speed="82" chest="80"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="FWD" price="35 030"/>
                      <Vehicles class="sports" name="Buffalo S" places="2" src={BuffaloS} alt="Buffalo S" fuel="Essence" speed="90" chest="80"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="35 510"/>
                      <Vehicles class="muscle" name="Sabre Turbo" places="2" src={SabreTurbo} alt="Sabre Turbo" fuel="Essence" speed="87" chest="97"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="AWD" price="35 879"/>
                      <Vehicles class="coupe" name="Futo" places="2" src={Futo} alt="Futo" fuel="Essence" speed="84" chest="90"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="35 930"/>
                      <Vehicles class="muscle" name="Deviant" places="2" src={Deviant} alt="Deviant" fuel="Essence" speed="90" chest="101"
                                srcBrand={Schyster} altBrand="Schyster" brand="Schyster" train="RWD" price="35 980"/>
                      <Vehicles class="muscle" name="Gauntlet" places="2" src={Gauntlet} alt="Gauntlet" fuel="Essence" speed="90" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="35 992"/>
                      <Vehicles class="motorcycles" name="Cliffhanger" places="2" src={Cliffhanger} alt="Cliffhanger" fuel="Essence" speed="92" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="36 980"/>
                      <Vehicles class="motorcycles" name="Gargoyle" places="2" src={Gargoyle} alt="Gargoyle" fuel="Essence" speed="92" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="36 990"/>
                      <Vehicles class="vans" name="Bison" places="6" src={Bison} alt="Bison" fuel="Essence" speed="81" chest="90"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="AWD" price="37 050"/>
                      <Vehicles class="sports" name="Penumbra FF" places="2" src={PenumbraFF} alt="Penumbra FF" fuel="Essence" speed="88" chest="80"
                                srcBrand={Maibatsu} altBrand="Maibatsu" brand="Maibatsu" train="AWD" price="37 060"/>
                      <Vehicles class="muscle" name="Chino" places="2" src={Chino} alt="Chino" fuel="Essence" speed="94" chest="103"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="37 150"/>
                      <Vehicles class="motorcycles" name="Double T" places="2" src={DoubleT} alt="Double T" fuel="Essence" speed="92" chest="0"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="RWD" price="37 599"/>
                      <Vehicles class="compact" name="Blista-Kanjo" places="2" src={BlistaKanjo} alt="Blista-Kanjo" fuel="Essence" speed="86" chest="65"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="FWD" price="37 930"/>
                      <Vehicles class="motorcycles" name="Bati 801" places="2" src={Bati801} alt="Bati 801" fuel="Essence" speed="94" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="37 960"/>
                      <Vehicles class="motorcycles" name="Defiler" places="1" src={Defiler} alt="Defiler" fuel="Essence" speed="92" chest="0"
                                srcBrand={Shitzu} altBrand="Shitzu" brand="Shitzu" train="RWD" price="37 979"/>
                      <Vehicles class="suvs" name="Seminole Frontier" places="4" src={SeminoleFrontier} alt="Seminole Frontier" fuel="Essence" speed="81" chest="80"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="37 980"/>
                      <Vehicles class="motorcycles" name="Bati 801 RR" places="2" src={Bati801RR} alt="Bati 801 RR" fuel="Essence" speed="94" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="38 490"/>
                      <Vehicles class="motorcycles" name="Carbon RS" places="2" src={CarbonRS} alt="Carbon RS" fuel="Essence" speed="90" chest="0"
                                srcBrand={Nagasaki} altBrand="Nagasaki" brand="Nagasaki" train="RWD" price="38 940"/>
                      <Vehicles class="motorcycles" name="FCR 1000" places="1" src={FCR1000} alt="FCR 1000" fuel="Essence" speed="87" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="38 997"/>
                      <Vehicles class="sports" name="Sugoi" places="4" src={Sugoi} alt="Sugoi" fuel="Essence" speed="97" chest="80"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="FWD" price="38 999"/>
                      <Vehicles class="sedan" name="Schafter" places="4" src={Schafter} alt="Schafter" fuel="Essence" speed="90" chest="102"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="39 990"/>
                      <Vehicles class="motorcycles" name="Zombie Bobber" places="1" src={ZombieBobber} alt="Zombie Bobber" fuel="Essence" speed="85" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="39 990"/>
                      <Vehicles class="vans" name="Camper" places="2" src={Camper} alt="Camper" fuel="Essence" speed="63" chest="105"
                                srcBrand={Brute} altBrand="Brute" brand="Brute" train="RWD" price="39 990"/>
                      <Vehicles class="motorcycles" name="Diabolus" places="1" src={Diabolus} alt="Diabolus" fuel="Essence" speed="89" chest="0"
                                srcBrand={Principe} altBrand="Principe" brand="Principe" train="RWD" price="39 990"/>
                      {/* 40K to 50K */}
                      <Vehicles class="motorcycles" name="Zombie Chopper" places="1" src={ZombieChopper} alt="Zombie Chopper" fuel="Essence" speed="85" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="40 590"/>
                      <Vehicles class="muscle" name="Yosemite" places="2" src={Yosemite} alt="Yosemite" fuel="Essence" speed="85" chest="119"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="40 770"/>
                      <Vehicles class="motorcycles" name="Thrust" places="2" src={Thrust} alt="Thrust" fuel="Essence" speed="95" chest="0"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="RWD" price="40 999"/>
                      <Vehicles class="motorcycles" name="Vindicator" places="2" src={Vindicator} alt="Vindicator" fuel="Essence" speed="92" chest="0"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="RWD" price="41 990"/>
                      <Vehicles class="sportsclassic" name="Tornado Custom" places="2" src={TornadoCustom} alt="Tornado Custom" fuel="Essence" speed="81" chest="65"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="41 990"/>
                      <Vehicles class="offroad" name="Sadler" places="4" src={Sadler} alt="Sadler" fuel="Essence" speed="81" chest="56"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="42 960"/>
                      <Vehicles class="muscle" name="Manana Custom" places="2" src={CustomManana} alt="Manana Custom" fuel="Essence" speed="88" chest="103"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="42 987"/>
                      <Vehicles class="coupe" name="Zion" places="2" src={Zion} alt="Zion" fuel="Essence" speed="90" chest="98"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="42 990"/>
                      <Vehicles class="sedan" name="Tailgater" places="4" src={Tailgater} alt="Tailgater" fuel="Essence" speed="90" chest="90"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="RWD" price="42 999"/>
                      <Vehicles class="coupe" name="Zion Cabrio" places="2" src={ZionCab} alt="Zion Cab" fuel="Essence" speed="90" chest="88"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermatch" train="RWD" price="43 529"/>
                      <Vehicles class="offroad" name="Vagrant" places="2" src={Vagrant} alt="Vagrant" fuel="Essence" speed="93" chest="0"
                                srcBrand={Maxwell} altBrand="Maxwell" brand="Maxwell" train="RWD" price="43 960"/>
                      <Vehicles class="offroad" name="Outlaw" places="2" src={Outlaw} alt="Outlaw" fuel="Essence" speed="73" chest="0"
                                srcBrand={Nagasaki} altBrand="Nagasaki" brand="Nagasaki" train="AWD" price="43 969"/>
                      <Vehicles class="muscle" name="Virgo" places="2" src={Virgo} alt="Virgo" fuel="Essence" speed="84" chest="113"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="43 990"/>
                      <Vehicles class="sedan" name="Glendale Custom" places="4" src={CustomGlendale} alt="Glendale Custom" fuel="Essence" speed="92" chest="85"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="43 990"/>
                      <Vehicles class="coupe" name="Jackal" places="4" src={Jackal} alt="Jackal" fuel="Essence" speed="105" chest="110"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="RWD" price="43 997"/>
                      <Vehicles class="suvs" name="Granger" places="4" src={Granger} alt="Granger" fuel="Essence" speed="87" chest="80"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="AWD" price="44 963"/>
                      <Vehicles class="coupe" name="Felon" places="4" src={Felon} alt="Felon" fuel="Essence" speed="90" chest="95"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="44 992"/>
                      <Vehicles class="vans" name="Minivan Custom" places="4" src={MinivanCustom} alt="Minivan Custom" fuel="Essence" speed="78" chest="105"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="45 940"/>
                      <Vehicles class="suvs" name="Baller" places="4" src={Baller} alt="Baller" fuel="Essence" speed="81" chest="80"
                                srcBrand={Gallivanter} altBrand="Gallivanter" brand="Gallivanter" train="AWD" price="45 970"/>
                      <Vehicles class="vans" name="Burrito Gang" places="4" src={BurritoGang} alt="Burrito Gang" fuel="Essence" speed="81" chest="105"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="45 980"/>
                      <Vehicles class="vans" name="Burrito Lost" places="4" src={BurritoLost} alt="Burrito Lost" fuel="Essence" speed="81" chest="105"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="45 980"/>
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
                      <Vehicles class="vans" name="Moonbeam Custom" places="4" src={MoonBeamCustom} alt="Moonbeam Custom" fuel="Essence" speed="78" chest="105"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="47 986"/>
                      <Vehicles class="offroad" name="Mesa II" places="4" src={MesaII} alt="Mesa II" fuel="Essence" speed="81" chest="56"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="47 995"/>
                      <Vehicles class="muscle" name="Faction-Custom" places="2" src={CustomFaction} alt="Faction-Custom" fuel="Essence" speed="87" chest="94"
                                srcBrand={Willard} altBrand="Willard" brand="Willard" train="RWD" price="48 995"/>
                      <Vehicles class="muscle" name="BuccaneerCustom" places="2" src={BuccaneerCustom} alt="BuccaneerCustom" fuel="Essence" speed="91" chest="102"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="49 990"/>
                      <Vehicles class="sports" name="Sultan" places="4" src={Sultan} alt="Sultan" fuel="Essence" speed="90" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="49 997"/>
                      <Vehicles class="offroad" name="Sandking SWB" places="1" src={SandkingSWB} alt="Sandking SWB" fuel="Essence" speed="81" chest="0"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="49 999"/>
                      {/* 50K to 60K */}
                      <Vehicles class="sports" name="Remus" places="2" src={Remus} alt="Remus" fuel="Essence" speed="92" chest="80"
                                srcBrand={Annis} altBrand="Annis" brand="Annis" train="RWD" price="50 979"/>
                      <Vehicles class="muscle" name="Sabre GT" places="2" src={CustomSabre} alt="Sabre GT" fuel="Essence" speed="87" chest="104"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="50 992"/>
                      <Vehicles class="suvs" name="Landstalker XL" places="4" src={LandstalkerXL} alt="Landstalker XL" fuel="Essence" speed="84" chest="80"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="AWD" price="51 080"/>
                      <Vehicles class="coupe" name="Previon" places="2" src={Previon} alt="Previon" fuel="Essence" speed="92" chest="89"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="51 190"/>
                      <Vehicles class="muscle" name="ChinoCustom" places="2" src={ChinoCustom} alt="ChinoCustom" fuel="Essence" speed="95" chest="104"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="51 920"/>
                      <Vehicles class="muscle" name="Tulip" places="2" src={Tulip} alt="Tulip" fuel="Essence" speed="92" chest="90"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="51 990"/>
                      <Vehicles class="muscle" name="Impaler" places="2" src={Impaler} alt="Impaler" fuel="Essence" speed="94" chest="104"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="51 992"/>
                      <Vehicles class="offroad" name="Sandking XL" places="4" src={SandkingXL} alt="Sandking XL" fuel="Essence" speed="81" chest="105"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="51 995"/>
                      <Vehicles class="sportsclassic" name="Zion Classic" places="2" src={ZionClassic} alt="Zion Classic" fuel="Essence" speed="93" chest="64"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="51 999"/>
                      <Vehicles class="motorcycles" name="Chimera" places="1" src={Chimera} alt="Chimera" fuel="Essence" speed="84" chest="0"
                                srcBrand={Nagasaki} altBrand="Nagasaki" brand="Nagasaki" train="RWD" price="52 190"/>
                      <Vehicles class="sports" name="Fusilade" places="2" src={Fusilade} alt="Fusilade" fuel="Essence" speed="93" chest="80"
                                srcBrand={Schyster} altBrand="Schyster" brand="Schyster" train="RWD" price="53 979"/>
                      <Vehicles class="muscle" name="Vamos" places="2" src={Vamos} alt="Vamos" fuel="Essence" speed="90" chest="88"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="53 990"/>
                      <Vehicles class="motorcycles" name="Nightblade" places="2" src={Nightblade} alt="Nightblade" fuel="Essence" speed="88" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="54 910"/>
                      <Vehicles class="muscle" name="Clique" places="2" src={Clique} alt="Clique" fuel="Essence" speed="93" chest="97"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="55 970"/>
                      <Vehicles class="vans" name="Rumpo Custom" places="4" src={RumpoCustom} alt="Rumpo Custom" fuel="Essence" speed="81" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="AWD" price="55 987"/>
                      <Vehicles class="vans" name="Youga 4X4" places="4" src={Youga4X4} alt="Youga 4X4" fuel="Essence" speed="75" chest="105"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="58 040"/>
                      <Vehicles class="sportsclassic" name="Peyote Turbo" places="2" src={PeyoteTurbo} alt="Peyote Turbo" fuel="Essence" speed="87" chest="42"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="59 990"/>
                      <Vehicles class="motorcycles" name="Diabolus Custom" places="1" src={DiabolusCustom} alt="Diabolus Custom" fuel="Essence" speed="89" chest="0"
                                srcBrand={Principe} altBrand="Principe" brand="Principe" train="RWD" price="59 990"/>
                      <Vehicles class="motorcycles" name="Sanctus" places="1" src={Sanctus} alt="Sanctus" fuel="Essence" speed="90" chest="0"
                                srcBrand={Lcc} altBrand="Lcc" brand="Lcc" train="RWD" price="59 990"/>
                      <Vehicles class="motorcycles" name="Hakuchou" places="2" src={Hakuchou} alt="Hakuchou" fuel="Essence" speed="95" chest="0"
                                srcBrand={Shitzu} altBrand="Shitzu" brand="Shitzu" train="RWD" price="59 992"/>
                      {/* 60K to 70K */}
                      <Vehicles class="sports" name="Streiter" places="4" src={Streiter} alt="Streiter" fuel="Essence" speed="87" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="AWD" price="60 899"/>
                      <Vehicles class="offroad" name="Yosemite Rancher" places="2" src={YosemiteRancher} alt="Yosemite Rancher" fuel="Essence" speed="87" chest="50"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="AWD" price="60 990"/>
                      <Vehicles class="suvs" name="FQ II" places="4" src={FQII} alt="FQ II" fuel="Essence" speed="84" chest="80"
                                srcBrand={Fathom} altBrand="Fathom" brand="Fathom" train="AWD" price="60 997"/>
                      <Vehicles class="sports" name="Schwartzer" places="2" src={Schwartzer} alt="Schwartzer" fuel="Essence" speed="92" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="61 295"/>
                      <Vehicles class="offroad" name="Freecrawler" places="4" src={Freecrawler} alt="Freecrawler" fuel="Essence" speed="84" chest="88"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="62 993"/>
                      <Vehicles class="sports" name="Kuruma" places="4" src={Kuruma} alt="Kuruma" fuel="Essence" speed="89" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="62 994"/>
                      <Vehicles class="muscle" name="HotKnife" places="2" src={HotKinife} alt="HotKnife" fuel="Essence" speed="87" chest="96"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="62 997"/>
                      <Vehicles class="suvs" name="Baller II" places="4" src={BallerII} alt="Baller II" fuel="Essence" speed="84" chest="80"
                                srcBrand={Gallivanter} altBrand="Gallivanter" brand="Gallivanter" train="AWD" price="63 980"/>
                      <Vehicles class="sports" name="RT 3000" places="2" src={RT3000} alt="RT 3000" fuel="Essence" speed="93" chest="80"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="RWD" price="63 995"/>
                      <Vehicles class="sports" name="Schafter V12" places="2" src={SchafterV12} alt="Schafter V12" fuel="Essence" speed="93" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="63 999"/>
                      <Vehicles class="motorcycles" name="Shinobi" places="1" src={Shinobi} alt="Shinobi" fuel="Essence" speed="97" chest="0"
                                srcBrand={Nagasaki} altBrand="Nagasaki" brand="Nagasaki" train="RWD" price="64 769"/>
                      <Vehicles class="suvs" name="XLS" places="4" src={XLS} alt="XLS" fuel="Essence" speed="82" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="AWD" price="64 990"/>
                      <Vehicles class="suvs" name="Rocoto" places="4" src={Rocoto} alt="Rocoto" fuel="Essence" speed="87" chest="80"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="AWD" price="65 590"/>
                      <Vehicles class="sportsclassic" name="Casco" places="2" src={Casco} alt="Casco" fuel="Essence" speed="94" chest="46"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="65 930"/>
                      <Vehicles class="suvs" name="Baller LE" places="4" src={BallerLE} alt="Baller LE" fuel="Essence" speed="84" chest="80"
                                srcBrand={Gallivanter} altBrand="Gallivanter" brand="Gallivanter" train="AWD" price="65 940"/>
                      <Vehicles class="sports" name="Schafter LWB" places="4" src={SchafterLWB} alt="Schafter LWB" fuel="Essence" speed="88" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="65 999"/>
                      <Vehicles class="motorcycles" name="FCR 1000 Custom" places="1" src={FCR1000Custom} alt="FCR 1000 Custom" fuel="Essence" speed="87" chest="0"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="67 920"/>
                      <Vehicles class="suvs" name="Dubsta" places="4" src={Dubsta} alt="Dubsta" fuel="Essence" speed="87" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="AWD" price="67 925"/>
                      <Vehicles class="sportsclassic" name="Coquette Classic" places="2" src={CoquetteClassic} alt="Coquette Classic" fuel="Essence" speed="94" chest="35"
                                srcBrand={Invetero} altBrand="Invetero" brand="Invetero" train="RWD" price="67 980"/>
                      <Vehicles class="muscle" name="Nightshade" places="2" src={Nightshade} alt="Nightshade" fuel="Essence" speed="90" chest="92"
                                srcBrand={Imponte} altBrand="Imponte" brand="Imponte" train="RWD" price="67 995"/>
                      <Vehicles class="muscle" name="Dominator-GTX" places="2" src={GTXDominator} alt="Dominator-GTX" fuel="Essence" speed="90" chest="108"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="68 949"/>
                      <Vehicles class="suvs" name="Granger 3600LX" places="4" src={Granger3600LX} alt="Granger 3600LX" fuel="Essence" speed="88" chest="80"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="AWD" price="69 299"/>
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
                      <Vehicles class="sportsclassic" name="Rapid GT Classic" places="2" src={RapidGTClassic} alt="Rapid GT Classic" fuel="Essence" speed="93" chest="48"
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
                      <Vehicles class="offroad" name="Riata" places="2" src={Riata} alt="Riata" fuel="Essence" speed="84" chest="102"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="79 699"/>
                      <Vehicles class="coupe" name="Sentinel Classic" places="2" src={SentinelClassic} alt="Sentinel Classic" fuel="Essence" speed="87" chest="84"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="79 990"/>
                      <Vehicles class="suvs" name="Patriot" places="4" src={Patriot} alt="Patriot" fuel="Essence" speed="81" chest="80"
                                srcBrand={Mammoth} altBrand="Mammoth" brand="Mammoth" train="AWD" price="79 990"/>
                      <Vehicles class="sports" name="Alpha" places="2" src={Alpha} alt="Alpha" fuel="Essence" speed="93" chest="80"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="79 990"/>
                      <Vehicles class="sportsclassic" name="190Z" places="2" src={Z} alt="190Z" fuel="Essence" speed="87" chest="55"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="79 990"/>
                      <Vehicles class="muscle" name="SlamTruck" places="2" src={SlamTruck} alt="SlamTruck" fuel="Essence" speed="78" chest="132"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="79 999"/>
                      {/* 80K to 90K */}
                      <Vehicles class="sports" name="8F Drafter" places="2" src={FDrafter} alt="8F Drafter" fuel="Essence" speed="93" chest="80"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="AWD" price="80 990"/>
                      <Vehicles class="offroad" name="Hellion" places="2" src={Hellion} alt="Hellion" fuel="Essence" speed="83" chest="80"
                                srcBrand={Annis} altBrand="Annis" brand="Annis" train="AWD" price="80 991"/>
                      <Vehicles class="sports" name="Khamelion" places="2" src={Khamelion} alt="Khamelion" fuel="Electric" speed="87" chest="80"
                                srcBrand={Hijak} altBrand="Hijak" brand="Hijak" train="RWD" price="80 995"/>
                      <Vehicles class="sports" name="Futo GTX" places="2" src={FutoGTX} alt="Futo GTX" fuel="Essence" speed="85" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="RWD" price="80 997"/>
                      <Vehicles class="sports" name="ZR 350" places="2" src={ZR350} alt="ZR 350" fuel="Essence" speed="93" chest="80"
                                srcBrand={Annis} altBrand="Annis" brand="Annis" train="RWD" price="81 990"/>
                      <Vehicles class="sports" name="Furore GT" places="2" src={FuroreGT} alt="Furore GT" fuel="Essence" speed="94" chest="80"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="81 992"/>
                      <Vehicles class="offroad" name="Everon" places="4" src={Everon} alt="Everon" fuel="Essence" speed="85" chest="105"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="81 997"/>
                      <Vehicles class="offroad" name="Brawler" places="2" src={Brawler} alt="Brawler" fuel="Essence" speed="87" chest="56"
                                srcBrand={Coil} altBrand="Coil" brand="Coil" train="AWD" price="82 970"/>
                      <Vehicles class="sports" name="Jester Classic" places="2" src={JesterClassic} alt="Jester Classic" fuel="Essence" speed="96" chest="80"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="RWD" price="83 990"/>
                      <Vehicles class="muscle" name="Dominator-GTT" places="2" src={GTTDominator} alt="Dominator-GTT" fuel="Essence" speed="91" chest="113"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="84 520"/>
                      <Vehicles class="muscle" name="Buffalo STX" places="4" src={BuffaloSTX} alt="Buffalo STX" fuel="Essence" speed="95" chest="120"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="84 983"/>
                      <Vehicles class="sports" name="Komoda" places="4" src={Komoda} alt="Komoda" fuel="Essence" speed="97" chest="80"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="84 990"/>
                      <Vehicles class="sports" name="Calico GTF" places="2" src={CalicoGTF} alt="Calico GTF" fuel="Essence" speed="93" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="85 970"/>
                      <Vehicles class="sports" name="Cypher" places="2" src={Cypher} alt="Cypher" fuel="Essence" speed="92" chest="80"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="85 990"/>
                      <Vehicles class="sports" name="IssiSport" places="2" src={IssiSport} alt="IssiSport" fuel="Essence" speed="92" chest="80"
                                srcBrand={Weeny} altBrand="Weeny" brand="Weeny" train="AWD" price="86 999"/>
                      <Vehicles class="sports" name="Vectre" places="2" src={Vectre} alt="Vectre" fuel="Essence" speed="93" chest="80"
                                srcBrand={EmperorBrand} altBrand="Emperor" brand="Emperor" train="AWD" price="87 990"/>
                      <Vehicles class="motorcycles" name="Reever" places="2" src={Reever} alt="Reever" fuel="Essence" speed="94" chest="0"
                                srcBrand={Western} altBrand="Western" brand="Western" train="RWD" price="89 900"/>
                      <Vehicles class="sedan" name="Cinquemila" places="4" src={Cinquemila} alt="Cinquemila" fuel="Essence" speed="96" chest="80"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="94 999"/>
                      {/* 90K to 100K */}
                      <Vehicles class="sports" name="V-STR" places="4" src={VSTR} alt="V-STR" fuel="Essence" speed="99" chest="80"
                                srcBrand={Albany} altBrand="Albany" brand="Albany" train="RWD" price="94 990"/>
                      <Vehicles class="suvs" name="Novak" places="4" src={Novak} alt="Novak" fuel="Essence" speed="95" chest="80"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="AWD" price="96 960"/>
                      <Vehicles class="suvs" name="Rebla GTS" places="4" src={ReblaGTS} alt="Rebla GTS" fuel="Essence" speed="98" chest="80"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="AWD" price="97 999"/>
                      <Vehicles class="sports" name="Revolter" places="4" src={Revolter} alt="Revolter" fuel="Essence" speed="97" chest="80"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="AWD" price="99 999"/>
                      {/* 100K to 110K */}
                      <Vehicles class="sports" name="Surano" places="2" src={Surano} alt="Surano" fuel="Essence" speed="96" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="103 469"/>
                      <Vehicles class="suvs" name="I Wagen" places="4" src={IWagen} alt="I Wagen" fuel="Electric" speed="79" chest="80"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="AWD" price="103 990"/>
                      <Vehicles class="sports" name="Sultan Classic" places="2" src={SultanClassic} alt="Sultan Classic" fuel="Essence" speed="90" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="103 990"/>
                      <Vehicles class="sports" name="Rapid GT" places="2" src={RapidGT} alt="Rapid GT" fuel="Essence" speed="95" chest="80"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="104 999"/>
                      <Vehicles class="sports" name="Sultan RS Classic" places="2" src={SultanRSClassic} alt="Sultan RS Classic" fuel="Essence" speed="91" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="104 999"/>
                      <Vehicles class="sports" name="Sultan RS" places="2" src={SultanRS} alt="Sultan RS" fuel="Essence" speed="92" chest="80"
                                srcBrand={Karin} altBrand="Karin" brand="Karin" train="AWD" price="105 992"/>
                      <Vehicles class="sports" name="9F" places="2" src={F9} alt="9F" fuel="Essence" speed="96" chest="80"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="AWD" price="109 990"/>
                      <Vehicles class="suvs" name="Dubsta II" places="4" src={DubstaII} alt="Dubsta II" fuel="Essence" speed="87" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="AWD" price="109 997"/>
                      {/* 110K to 120K */}
                      <Vehicles class="suvs" name="Baller LE LWB" places="4" src={BallerLELWB} alt="Baller LE LWB" fuel="Essence" speed="84" chest="80"
                                srcBrand={Gallivanter} altBrand="Gallivanter" brand="Gallivanter" train="AWD" price="112 990"/>
                      <Vehicles class="offroad" name="Kamacho" places="4" src={Kamacho} alt="Kamacho" fuel="Essence" speed="84" chest="60"
                                srcBrand={Canis} altBrand="Canis" brand="Canis" train="AWD" price="113 990"/>
                      <Vehicles class="offroad" name="Caracara 4X4" places="4" src={Caracara4X4} alt="Caracara 4X4" fuel="Essence" speed="86" chest="118"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="114 950"/>
                      <Vehicles class="sports" name="Jugular" places="2" src={Jugular} alt="Jugular" fuel="Essence" speed="98" chest="80"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="AWD" price="114 997"/>
                      <Vehicles class="sports" name="Tropos Rallye" places="2" src={TroposRallye} alt="Tropos Rallye" fuel="Essence" speed="95" chest="80"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="118 599"/>
                      <Vehicles class="sedan" name="Cognoscenti 55" places="4" src={Cognoscenti55} alt="Cognoscenti 55" fuel="Essence" speed="90" chest="95"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="119 990"/>
                      <Vehicles class="super" name="Voltic" places="2" src={Voltic} alt="Voltic" fuel="Electric" speed="90" chest="50"
                                srcBrand={Coil} altBrand="Coil" brand="Coil" train="RWD" price="119 990"/>
                      <Vehicles class="offroad" name="Dubsta 6X6" places="6" src={Dubsta6X6} alt="Dubsta 6X6" fuel="Essence" speed="86" chest="88"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="AWD" price="119 992"/>
                      <Vehicles class="sports" name="Omnis" places="2" src={Omnis} alt="Omnis" fuel="Essence" speed="95" chest="80"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="AWD" price="119 995"/>
                      <Vehicles class="sportsclassic" name="Mamba" places="2" src={Mamba} alt="Mamba" fuel="Essence" speed="92" chest="47"
                                srcBrand={Declasse} altBrand="Declasse" brand="Declasse" train="RWD" price="119 998"/>
                      <Vehicles class="offroad" name="Guardian" places="6" src={Guardian} alt="Guardian" fuel="Essence" speed="81" chest="105"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="119 999"/>
                      <Vehicles class="suvs" name="Contender" places="4" src={Contender} alt="Contender" fuel="Essence" speed="84" chest="80"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="119 999"/>
                      <Vehicles class="motorcycles" name="Hakuchou Drag" places="2" src={HakuchouDrag} alt="Hakuchou Drag" fuel="Essence" speed="99" chest="0"
                                srcBrand={Shitzu} altBrand="Shitzu" brand="Shitzu" train="RWD" price="119 999"/>
                      {/* 120K to 130K */}
                      <Vehicles class="sports" name="Flash GT" places="2" src={FlashGT} alt="Flash GT" fuel="Essence" speed="94" chest="80"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="120 997"/>
                      <Vehicles class="sports" name="9F Cabrio" places="2" src={F9Cabrio} alt="9F Cabrio" fuel="Essence" speed="96" chest="80"
                                srcBrand={Obey} altBrand="Obey" brand="Obey" train="AWD" price="121 990"/>
                      <Vehicles class="sports" name="GB 200" places="2" src={GB200} alt="GB 200" fuel="Essence" speed="95" chest="80"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="AWD" price="121 999"/>
                      <Vehicles class="sports" name="Rapid GT Cabrio" places="2" src={RapidGTCab} alt="Rapid GT Cabrio" fuel="Essence" speed="95" chest="80"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="122 999"/>
                      <Vehicles class="sportsclassic" name="Monroe" places="2" src={Monroe} alt="Monroe" fuel="Essence" speed="93" chest="55"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="124 997"/>
                      <Vehicles class="suvs" name="Baller ST" places="4" src={BallerST} alt="Baller ST" fuel="Essence" speed="87" chest="80"
                                srcBrand={Gallivanter} altBrand="Gallivanter" brand="Gallivanter" train="AWD" price="124 990"/>
                      <Vehicles class="sports" name="Raiden" places="2" src={Raiden} alt="Raiden" fuel="Electric" speed="97" chest="80"
                                srcBrand={Coil} altBrand="Coil" brand="Coil" train="AWD" price="125 990"/>
                      <Vehicles class="sports" name="Euros" places="2" src={Euros} alt="Euros" fuel="Essence" speed="93" chest="80"
                                srcBrand={Annis} altBrand="Annis" brand="Annis" train="RWD" price="125 993"/>
                      <Vehicles class="sportsclassic" name="Stirling GT" places="2" src={StirlingGT} alt="Stirling GT" fuel="Essence" speed="86" chest="43"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="126 990"/>
                      <Vehicles class="sports" name="Lynx" places="2" src={Lynx} alt="Lynx" fuel="Essence" speed="98" chest="80"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="RWD" price="126 995"/>
                      <Vehicles class="sports" name="Feltzer" places="2" src={Feltzer} alt="Feltzer" fuel="Essence" speed="95" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="126 999"/>
                      <Vehicles class="sports" name="Massacro" places="2" src={Massacro} alt="Massacro" fuel="Essence" speed="97" chest="80"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="127 997"/>
                      <Vehicles class="sports" name="Elegy Retro Custom" places="2" src={ElegyRetroCustom} alt="Elegy Retro Custom" fuel="Essence" speed="92" chest="80"
                                srcBrand={Annis} altBrand="Annis" brand="Annis" train="AWD" price="128 992"/>
                      <Vehicles class="sportsclassic" name="Torero" places="2" src={Torero} alt="Torero" fuel="Essence" speed="93" chest="55"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="129 699"/>
                      <Vehicles class="sports" name="Elegy RH8" places="2" src={ElegyRH8} alt="Elegy RH8" fuel="Essence" speed="94" chest="80"
                                srcBrand={Annis} altBrand="Annis" brand="Annis" train="AWD" price="129 997"/>
                      {/* 130K to 140K */}
                      <Vehicles class="sports" name="Carbonizzare" places="2" src={Carbonizzare} alt="Carbonizzare" fuel="Essence" speed="98" chest="80"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="133 980"/>
                      <Vehicles class="sports" name="Coquette" places="2" src={Coquette} alt="Coquette" fuel="Essence" speed="94" chest="80"
                                srcBrand={Invetero} altBrand="Invetero" brand="Invetero" train="RWD" price="134 960"/>
                      <Vehicles class="suvs" name="Astron" places="4" src={Astron} alt="Astron" fuel="Essence" speed="93" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="AWD" price="134 970"/>
                      <Vehicles class="sports" name="Jester RR" places="2" src={JesterRR} alt="Jester RR" fuel="Essence" speed="95" chest="80"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="RWD" price="134 996"/>
                      <Vehicles class="sports" name="Imorgon" places="2" src={Imorgon} alt="Imorgon" fuel="Electric" speed="93" chest="80"
                                srcBrand={Overflod} altBrand="Overflod" brand="Overflod" train="AWD" price="134 997"/>
                      <Vehicles class="sports" name="Banshee" places="2" src={Banshee} alt="Banshee" fuel="Essence" speed="92" chest="80"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="139 920"/>
                      <Vehicles class="sportsclassic" name="Cheetah Classic" places="2" src={CheetahClassic} alt="Cheetah Classic" fuel="Essence" speed="95" chest="63"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="139 950"/>
                      <Vehicles class="sedan" name="Deity" places="4" src={Deity} alt="Deity" fuel="Essence" speed="93" chest="86"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="139 965"/>
                      <Vehicles class="sedan" name="Super Diamond" places="4" src={SuperDiamond} alt="Super Diamond" fuel="Essence" speed="90" chest="60"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="139 990"/>
                      <Vehicles class="sportsclassic" name="Turismo Classic" places="2" src={TurismoClassic} alt="Turismo Classic" fuel="Essence" speed="95" chest="55"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="139 999"/>
                      {/* 140K to 150K */}
                      <Vehicles class="super" name="Bullet" places="2" src={Bullet} alt="Bullet" fuel="Essence" speed="95" chest="50"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="141 929"/>
                      <Vehicles class="suvs" name="Jubilee" places="4" src={Jubilee} alt="Jubilee" fuel="Essence" speed="94" chest="80"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="AWD" price="143 559"/>
                      <Vehicles class="super" name="Banshee 900RR" places="2" src={Banshee900RR} alt="Banshee 900RR" fuel="Essence" speed="93" chest="50"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="144 490"/>
                      <Vehicles class="sports" name="Bestia GTS" places="2" src={BestiaGTS} alt="Bestia GTS" fuel="Essence" speed="96" chest="80"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="AWD" price="144 970"/>
                      <Vehicles class="sedan" name="Cognoscenti" places="4" src={Cognoscenti} alt="Cognoscenti" fuel="Essence" speed="87" chest="86"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="149 980"/>
                      <Vehicles class="sports" name="Comet" places="2" src={Comet} alt="Comet" fuel="Essence" speed="95" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="RWD" price="149 930"/>
                      {/* 150K to 160K */}
                      <Vehicles class="sports" name="Paragon" places="2" src={Paragon} alt="Paragon" fuel="Essence" speed="99" chest="80"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="AWD" price="154 999"/>
                      <Vehicles class="sports" name="Schlagen GT" places="2" src={SchlagenGT} alt="Schlagen GT" fuel="Essence" speed="99" chest="80"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="RWD" price="155 999"/>
                      <Vehicles class="sports" name="Verlierer" places="2" src={Verlierer} alt="Verlierer" fuel="Essence" speed="93" chest="80"
                                srcBrand={Bravado} altBrand="Bravado" brand="Bravado" train="RWD" price="157 190"/>
                      <Vehicles class="sports" name="Comet Retro Custom" places="2" src={CometRetroCustom} alt="Comet Retro Custom" fuel="Essence" speed="95" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="RWD" price="159 999"/>
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
                      <Vehicles class="sports" name="Neon" places="4" src={Neon} alt="Neon" fuel="Electric" speed="97" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="AWD" price="205 990"/>
                      <Vehicles class="sports" name="Pariah" places="2" src={Pariah} alt="Pariah" fuel="Essence" speed="97" chest="80"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="RWD" price="206 990"/>
                      <Vehicles class="sports" name="Jester" places="2" src={Jester} alt="Jester" fuel="Essence" speed="98" chest="80"
                                srcBrand={Dinka} altBrand="Dinka" brand="Dinka" train="AWD" price="207 995"/>
                      <Vehicles class="suvs" name="Toros" places="4" src={Toros} alt="Toros" fuel="Essence" speed="96" chest="80"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="AWD" price="208 299"/>
                      <Vehicles class="sports" name="Seven 70" places="2" src={Seven70} alt="Seven 70" fuel="Essence" speed="99" chest="80"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="209 970"/>
                      <Vehicles class="sports" name="Coquette D10" places="2" src={CoquetteD10} alt="Coquette D10" fuel="Essence" speed="99" chest="80"
                                srcBrand={Invetero} altBrand="Invetero" brand="Invetero" train="RWD" price="210 960"/>
                      <Vehicles class="sports" name="Comet SR" places="2" src={CometSR} alt="Comet SR" fuel="Essence" speed="97" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="RWD" price="211 990"/>
                      <Vehicles class="sports" name="Specter" places="2" src={Specter} alt="Specter" fuel="Essence" speed="96" chest="80"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="211 990"/>
                      <Vehicles class="sports" name="Neo" places="2" src={Neo} alt="Neo" fuel="Essence" speed="100" chest="80"
                                srcBrand={Vysser} altBrand="Vysser" brand="Vysser" train="AWD" price="212 999"/>
                      <Vehicles class="coupe" name="Champion" places="2" src={Champion} alt="Champion" fuel="Essence" speed="100" chest="86"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="213 965"/>
                      <Vehicles class="sportsclassic" name="Infernus Classic" places="2" src={InfernusClassic} alt="Infernus Classic" fuel="Essence" speed="93" chest="74"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="213 965"/>
                      <Vehicles class="sports" name="Itali GTO" places="2" src={ItaliGTO} alt="Itali GTO" fuel="Essence" speed="100" chest="80"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="AWD" price="213 990"/>
                      <Vehicles class="sports" name="Comet S2" places="2" src={CometS2} alt="Comet S2" fuel="Essence" speed="97" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="RWD" price="214 970"/>
                      <Vehicles class="sports" name="Growler" places="2" src={Growler} alt="Growler" fuel="Essence" speed="95" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="RWD" price="214 995"/>
                      <Vehicles class="sports" name="Itali RSX" places="2" src={ItaliRSX} alt="Itali RSX" fuel="Essence" speed="101" chest="80"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="AWD" price="215 999"/>
                      <Vehicles class="super" name="Penetrator" places="2" src={Penetrator} alt="Penetrator" fuel="Essence" speed="99" chest="50"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="AWD" price="216 997"/>
                      <Vehicles class="super" name="Infernus" places="2" src={Infernus} alt="Infernus" fuel="Essence" speed="93" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="AWD" price="216 999"/>
                      <Vehicles class="super" name="Vacca" places="2" src={Vacca} alt="Vacca" fuel="Essence" speed="95" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="217 990"/>
                      <Vehicles class="super" name="Cheetah" places="2" src={Cheetah} alt="Cheetah" fuel="Essence" speed="95" chest="50"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="218 970"/>
                      <Vehicles class="super" name="Adder" places="2" src={Adder} alt="Adder" fuel="Essence" speed="100" chest="50"
                                srcBrand={Truffade} altBrand="Truffade" brand="Truffade" train="AWD" price="219 990"/>
                      <Vehicles class="super" name="Entity XF" places="2" src={EntityXF} alt="Entity XF" fuel="Essence" speed="96" chest="50"
                                srcBrand={Overflod} altBrand="Overflod" brand="Overflod" train="AWD" price="220 999"/>
                      <Vehicles class="super" name="SC1" places="2" src={SC1} alt="SC1" fuel="Essence" speed="99" chest="50"
                                srcBrand={Ubermacht} altBrand="Ubermacht" brand="Ubermacht" train="RWD" price="221 999"/>
                      <Vehicles class="super" name="Itali GTB" places="2" src={ItaliGTB} alt="Itali GTB" fuel="Essence" speed="98" chest="50"
                                srcBrand={Progen} altBrand="Progen" brand="Progen" train="AWD" price="222 999"/>
                      <Vehicles class="super" name="Nero" places="2" src={Nero} alt="Nero" fuel="Essence" speed="99" chest="50"
                                srcBrand={Truffade} altBrand="Truffade" brand="Truffade" train="AWD" price="223 995"/>
                      <Vehicles class="super" name="Osiris" places="2" src={Osiris} alt="Osiris" fuel="Essence" speed="99" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="AWD" price="224 990"/>
                      <Vehicles class="super" name="T20" places="2" src={T20} alt="T20" fuel="Essence" speed="99" chest="50"
                                srcBrand={Progen} altBrand="Progen" brand="Progen" train="AWD" price="225 990"/>
                      <Vehicles class="super" name="Zentorno" places="2" src={Zentorno} alt="Zentorno" fuel="Essence" speed="99" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="AWD" price="226 990"/>
                      <Vehicles class="super" name="Tempesta" places="2" src={Tempesta} alt="Tempesta" fuel="Essence" speed="98" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="AWD" price="227 999"/>
                      <Vehicles class="sports" name="Comet S2 Cabrio" places="2" src={CometS2Cabrio} alt="Comet S2 Cabrio" fuel="Essence" speed="97" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="RWD" price="228 970"/>
                      <Vehicles class="super" name="Nero Custom" places="2" src={NeroCustom} alt="Nero Custom" fuel="Essence" speed="99" chest="50"
                                srcBrand={Truffade} altBrand="Truffade" brand="Truffade" train="AWD" price="228 990"/>
                      <Vehicles class="super" name="ETR1" places="2" src={ETR1} alt="ETR1" fuel="Essence" speed="98" chest="50"
                                srcBrand={EmperorBrand} altBrand="Emperor" brand="Emperor" train="RWD" price="228 992"/>
                      <Vehicles class="super" name="Turismo R" places="2" src={TurismoR} alt="Turismo R" fuel="Essence" speed="96" chest="50"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="229 499"/>
                      <Vehicles class="super" name="Itali GTB Custom" places="2" src={ItaliGTBCustom} alt="Itali GTB Custom" fuel="Essence" speed="98" chest="50"
                                srcBrand={Progen} altBrand="Progen" brand="Progen" train="AWD" price="230 999"/>
                      <Vehicles class="super" name="Furia" places="2" src={Furia} alt="Furia" fuel="Essence" speed="100" chest="50"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="AWD" price="231 999"/>
                      <Vehicles class="super" name="XA 21" places="2" src={XA21} alt="XA 21" fuel="Essence" speed="98" chest="50"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="AWD" price="231 999"/>
                      <Vehicles class="super" name="Cyclone" places="2" src={Cyclone} alt="Cyclone" fuel="Electric" speed="98" chest="50"
                                srcBrand={Coil} altBrand="Coil" brand="Coil" train="AWD" price="232 240"/>
                      <Vehicles class="super" name="FMJ" places="2" src={FMJ} alt="FMJ" fuel="Essence" speed="98" chest="50"
                                srcBrand={Vapid} altBrand="Vapid" brand="Vapid" train="RWD" price="232 995"/>
                      <Vehicles class="super" name="811" places="2" src={Height11} alt="811" fuel="Essence" speed="98" chest="50"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="AWD" price="233 990"/>
                      <Vehicles class="super" name="GP1" places="2" src={GP1} alt="GP1" fuel="Essence" speed="100" chest="50"
                                srcBrand={Progen} altBrand="Progen" brand="Progen" train="RWD" price="233 999"/>
                      <Vehicles class="super" name="Tyrant" places="2" src={Tyrant} alt="Tyrant" fuel="Essence" speed="103" chest="50"
                                srcBrand={Overflod} altBrand="Overflod" brand="Overflod" train="RWD" price="234 990"/>
                      <Vehicles class="super" name="Reaper" places="2" src={Reaper} alt="Reaper" fuel="Essence" speed="99" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="234 995"/>
                      <Vehicles class="super" name="Zeno" places="2" src={Zeno} alt="Zeno" fuel="Essence" speed="101" chest="50"
                                srcBrand={Overflod} altBrand="Overflod" brand="Overflod" train="RWD" price="234 999"/>
                      <Vehicles class="super" name="Thrax" places="2" src={Thrax} alt="Thrax" fuel="Essence" speed="99" chest="50"
                                srcBrand={Truffade} altBrand="Truffade" brand="Truffade" train="AWD" price="235 990"/>
                      <Vehicles class="super" name="Entity XXR" places="2" src={EntityXXR} alt="Entity XXR" fuel="Essence" speed="105" chest="50"
                                srcBrand={Overflod} altBrand="Overflod" brand="Overflod" train="RWD" price="236 929"/>
                      <Vehicles class="super" name="Ignus" places="2" src={Ignus} alt="Ignus" fuel="Essence" speed="100" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="AWD" price="237 990"/>
                      <Vehicles class="super" name="Tigon" places="2" src={Tigon} alt="Tigon" fuel="Essence" speed="100" chest="50"
                                srcBrand={Lampadati} altBrand="Lampadati" brand="Lampadati" train="RWD" price="237 990"/>
                      <Vehicles class="super" name="Zorrusso" places="2" src={Zorrusso} alt="Zorrusso" fuel="Essence" speed="100" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="RWD" price="238 990"/>
                      <Vehicles class="sedan" name="Stretch" places="4" src={Stretch} alt="Stretch" fuel="Essence" speed="84" chest="104"
                                srcBrand={Dundreary} altBrand="Dundreary" brand="Dundreary" train="RWD" price="239 999"/>
                      <Vehicles class="super" name="Emerus" places="2" src={Emerus} alt="Emerus" fuel="Essence" speed="100" chest="50"
                                srcBrand={Progen} altBrand="Progen" brand="Progen" train="RWD" price="239 999"/>
                      <Vehicles class="sedan" name="Stafford" places="4" src={Stafford} alt="Stafford" fuel="Essence" speed="75" chest="68"
                                srcBrand={Enus} altBrand="Enus" brand="Enus" train="RWD" price="240 000"/>
                      <Vehicles class="sports" name="CometSafari" places="2" src={CometSafari} alt="CometSafari" fuel="Essence" speed="95" chest="80"
                                srcBrand={Pfister} altBrand="Pfister" brand="Pfister" train="AWD" price="240 000"/>
                      <Vehicles class="super" name="Krieger" places="2" src={Krieger} alt="Krieger" fuel="Essence" speed="100" chest="50"
                                srcBrand={Benefactor} altBrand="Benefactor" brand="Benefactor" train="AWD" price="242 995"/>
                      <Vehicles class="super" name="Taipan" places="2" src={Taipan} alt="Taipan" fuel="Essence" speed="106" chest="50"
                                srcBrand={Cheval} altBrand="Cheval" brand="Cheval" train="RWD" price="249 999"/>
                      <Vehicles class="sports" name="Ruston" places="2" src={Ruston} alt="Ruston" fuel="Essence" speed="92" chest="80"
                                srcBrand={Hijak} altBrand="Hijak" brand="Hijak" train="RWD" price="249 999"/>
                      <Vehicles class="motorcycles" name="Stryder" places="2" src={Stryder} alt="Stryder" fuel="Essence" speed="81" chest="0"
                                srcBrand={Nagasaki} altBrand="Nagasaki" brand="Nagasaki" train="RWD" price="260 000"/>
                      <Vehicles class="sports" name="Locust" places="2" src={Locust} alt="Locust" fuel="Essence" speed="96" chest="80"
                                srcBrand={Ocelot} altBrand="Ocelot" brand="Ocelot" train="RWD" price="260 000"/>
                      <Vehicles class="sportsclassic" name="ZType" places="2" src={ZType} alt="ZType" fuel="Essence" speed="96" chest="47"
                                srcBrand={Truffade} altBrand="Truffade" brand="Truffade" train="RWD" price="280 000"/>
                      <Vehicles class="super" name="DevesteEight" places="2" src={DevesteEight} alt="DevesteEight" fuel="Essence" speed="105" chest="50"
                                srcBrand={Principe} altBrand="Principe" brand="Principe" train="RWD" price="350 000"/>
                      <Vehicles class="sports" name="Visione" places="2" src={Visione} alt="Visione" fuel="Essence" speed="99" chest="80"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="RWD" price="350 000"/>
                      <Vehicles class="super" name="Tyrus" places="2" src={Tyrus} alt="Tyrus" fuel="Essence" speed="100" chest="50"
                                srcBrand={Progen} altBrand="Progen" brand="Progen" train="RWD" price="380 999"/>
                      <Vehicles class="super" name="Autarch" places="2" src={Autarch} alt="Autarch" fuel="Essence" speed="100" chest="50"
                                srcBrand={Overflod} altBrand="Overflod" brand="Overflod" train="RWD" price="400 000"/>
                      <Vehicles class="super" name="RE 7B" places="2" src={RE7B} alt="RE 7B" fuel="Essence" speed="100" chest="50"
                                srcBrand={Annis} altBrand="Annis" brand="Annis" train="RWD" price="400 000"/>
                      <Vehicles class="super" name="S80 RR" places="2" src={S80RR} alt="S80 RR" fuel="Essence" speed="100" chest="50"
                                srcBrand={Annis} altBrand="Annis" brand="Annis" train="RWD" price="400 000"/>
                      <Vehicles class="super" name="Tezeract" places="2" src={Tezeract} alt="Tezeract" fuel="Electric" speed="105" chest="50"
                                srcBrand={Pegassi} altBrand="Pegassi" brand="Pegassi" train="AWD" price="400 000"/>
                      <Vehicles class="super" name="Vagner" places="2" src={Vagner} alt="Vagner" fuel="Essence" speed="100" chest="50"
                                srcBrand={Dewbauchee} altBrand="Dewbauchee" brand="Dewbauchee" train="RWD" price="400 000"/>
                      <Vehicles class="super" name="X80 Proto" places="2" src={X80Proto} alt="X80 Proto" fuel="Essence" speed="100" chest="50"
                                srcBrand={Grotti} altBrand="Grotti" brand="Grotti" train="AWD" price="400 000"/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default PDM;