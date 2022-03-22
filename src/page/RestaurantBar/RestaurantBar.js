import '../MoneyService/MoneyService.css';
import Navigator from "../../component/Navigator/Navigator";
import Header from "../../component/Header/Header";
import {Link} from "react-router-dom";
import EncartDonCountryStorel from "../../img/EncartDonCountryStorel.jpg";

function RestaurantBar() {
    return (
        <div>
            <Navigator value="www.restaurant-bar.info" />
            <Header />
            <div className="pageExemple">
                <Link to="/doncountrystore">
                    <img src={EncartDonCountryStorel} alt="DonCountryStore" className="randomInsert"/>
                    <div className="pageExempleDescript">
                        <h3>Don's Country Store</h3>
                        <p>La bouffe la plus fraiche du Nord !</p>
                        <p>L'esprit du nord c'est les choses simples,<br/>brutes, qui sorte de notre terre soigné par l'amour du sol et par notre soleil de plomb.<br/>La meilleur selection ainsi que les meilleurs prix pour satisfaire votre appetit...</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RestaurantBar;