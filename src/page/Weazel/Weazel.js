import './Weazel.css';
import Navigator from "../../component/Navigator/Navigator";
import WeazelLogo from "../../img/weazel/weazelLogo.png";
import $ from "jquery";


function Weazel() {
    let date1 = new Date();
    let dateLocale = date1.toLocaleString('fr-FR', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    $("#dateToday").html(dateLocale.valueOf());
    return(
        <div>
            <Navigator value="www.weazelnews.info" />
            <header>
                <div id="navUp">
                    <img src={WeazelLogo} alt="Weazel"/>
                    <div id="dateToday">
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Editions</li>
                        <li>Annonces</li>
                        <li>Services</li>
                        <li>Mon Compte</li>
                    </ul>
                </nav>
            </header>
            <div className="WeazelBody">

            </div>
        </div>
    );
}

export default Weazel;