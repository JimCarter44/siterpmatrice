import './Navigator.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import $ from "jquery";

function Navigator(props) {
    $(function () {
        let searchBarValue = $(".searchBar");
        let pdmURL = "www.premuimdeluxemotorsport.info";
        let homeURL = "www.eyefind.info";
        let YouToolURL = "www.youtool.info";
        let GVTCivillaw = "www.recueildesloisetatsanandreas.info";
        let BeanMachineURL = "www.beanmachine.info";
        let DigitalDenURL = "www.digitalden.info";
        let DonCountryStoreURL = "www.doncountrystore.info";
        let LuckyPluckerURL = "www.luckyplucker.info";
        let SeaWordURL = "www.seaword.info";
        let UpnAtomURL = "www.upnatom.info";
        let FashionHealthURL = "www.mode-sante.info";
        let TravelTransportURL = "www.voyages-transports.info";
        let MoneyServiceURL = "www.argent-services.info";
        let RestaurantBArURL = "www.restaurant-bar.info";
        let MediaEnterteinementURL = "www.medias-divertissements.info";
        let FleecaURL = "www.fleeca.info";
        let CommingSoonURL = "www.comingsoon.info";
        let FourHundredFourURL = "www.404.info";
        searchBarValue.change(function () {
            console.log("Testchange");
            console.log(pdmURL);
            console.log(searchBarValue.val());
            if (searchBarValue.val() === pdmURL) {
                console.log("validation");
                window.location.href = "/pdm";
            }
            else if (searchBarValue.val() === homeURL) {
                console.log("validation");
                window.location.href = "/";
            }
            else if (searchBarValue.val() === YouToolURL) {
                console.log("validation");
                window.location.href = "/youtool";
            }
            else if (searchBarValue.val() === GVTCivillaw) {
                console.log("validation");
                window.location.href = "/gouvernment/civillaw";
            }
            else if (searchBarValue.val() === BeanMachineURL) {
                console.log("validation");
                window.location.href = "/beanmachine";
            }
            else if (searchBarValue.val() === DigitalDenURL) {
                console.log("validation");
                window.location.href = "/digitalden";
            }
            else if (searchBarValue.val() === DonCountryStoreURL) {
                console.log("validation");
                window.location.href = "/doncountrystore";
            }
            else if (searchBarValue.val() === LuckyPluckerURL) {
                console.log("validation");
                window.location.href = "/luckyplucker";
            }
            else if (searchBarValue.val() === SeaWordURL) {
                console.log("validation");
                window.location.href = "/seaword";
            }
            else if (searchBarValue.val() === UpnAtomURL) {
                console.log("validation");
                window.location.href = "/upnatom";
            }
            else if (searchBarValue.val() === FashionHealthURL) {
                console.log("validation");
                window.location.href = "/fashionhealth";
            }
            else if (searchBarValue.val() === TravelTransportURL) {
                console.log("validation");
                window.location.href = "/traveltransport";
            }
            else if (searchBarValue.val() === MoneyServiceURL) {
                console.log("validation");
                window.location.href = "/moneyservice";
            }
            else if (searchBarValue.val() === RestaurantBArURL) {
                console.log("validation");
                window.location.href = "/restaurantbar";
            }
            else if (searchBarValue.val() === MediaEnterteinementURL) {
                console.log("validation");
                window.location.href = "/mediaentertainement";
            }
            else if (searchBarValue.val() === FleecaURL) {
                console.log("validation");
                window.location.href = "/fleeca";
            }
            else if (searchBarValue.val() === CommingSoonURL) {
                console.log("validation");
                window.location.href = "/comingsoon";
            }
            else if (searchBarValue.val() === FourHundredFourURL) {
                console.log("validation");
                window.location.href = "/fourhundredfour";
            }
            else {
                console.log("404");
                window.location.href = "/fourhundredfour";
            }
        });
    });
    $(function () {
        let back = $(".backButton");
        back.click(function () {
            window.history.back();
        })
        let next = $(".nextButton");
        next.click(function () {
            window.history.forward();
        })
    });
    return(
        <div className="searchTopBar">
            <div className="actionButton">
                <div className="bnButton">
                    <div className="bnButtonOne">
                        <FontAwesomeIcon icon={faCaretLeft} className="backButton"/>
                    </div>
                    <div className="bnButtonTwo">
                        <FontAwesomeIcon icon={faCaretRight} className="nextButton"/>
                    </div>
                </div>
                <div className="homeZone">
                    <Link to="/"><FontAwesomeIcon icon={faHome} className="homeButton"/></Link>
                </div>
            </div>
            <input type="text" className="searchBar" defaultValue={props.value}/>
        </div>
    );
}

export default Navigator;