import './LSToday.css';
import Navigator from "../../component/Navigator/Navigator";
import LSTodayLogo from "../../img/LsToday.png";
import $ from "jquery";


    let date1 = new Date();
    let dateLocale = date1.toLocaleString('fr-FR', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
    $("#dateToday").html(dateLocale.valueOf());

function LSToday() {
    return(
        <div>
            <Navigator />
            <header>
                <div id="navUp">
                    <img src={LSTodayLogo} alt="LSToday"/>
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
            <div className="LSTodayBody">

            </div>
        </div>
    );
}

export default LSToday;