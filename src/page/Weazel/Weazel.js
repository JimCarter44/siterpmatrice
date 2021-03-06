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
            <div id="navWeazel">
                <img src={WeazelLogo} alt="Weazel"/>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Intranet</li>
                    </ul>
                </nav>
            </div>
            <div className="WeazelBody">

            </div>
        </div>
    );
}

export default Weazel;