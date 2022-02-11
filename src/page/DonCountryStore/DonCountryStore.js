import './DonCountryStore.css';
import Navigator from "../../component/Navigator/Navigator";
import EncartDonCountryStore from "../../img/EncartDonCountryStorel.jpg";

function DonCountryStore() {
    return(
        <div>
            <Navigator value="www.doncountrystore.info" />
            <div id="backgroundDCS">
                <img src={EncartDonCountryStore} alt="Don Country Store" id="logoDCS"/>
                <div id="backListRock">
                    <div id="leftList">
                        <h3>Repas :</h3>
                        <p>Sandwich au fromage .... $2</p>
                        <p>Sandwich complet ........... $2</p>
                        <p>Hotdog ................................. $2</p>
                        <p>Phat chips ............................ $2</p>
                        <h3>Dessert :</h3>
                        <p>Barre énergétique ............. $2</p>
                        <p>Barre météorite .................. $2</p>
                        <p>Twerks .................................... $2</p>
                        <p>Snikkel .................................... $2</p>
                        <p>Donut ...................................... $2</p>
                    </div>
                    <div id="verticalLineDCS"/>
                    <div id="rightList">
                        <h3>Boissons :</h3>
                        <p>Bouteille d'eau ....................... $2</p>
                        <p>Sprunk ....................................... $2</p>
                        <p>eCola .......................................... $2</p>
                        <p>Ice-T ........................................... $2</p>
                        <p>Bière PiBwasser ...................... $7</p>
                        <p>Whiskey ..................................... $10</p>
                        <p>Vodka .......................................... $12</p>
                        <h3>Tabac :</h3>
                        <p>Briquet ........................................ $2</p>
                        <p>Papier à rouler ......................... $2</p>
                        <p>Paquet de 69 brand ............... $15</p>
                        <p>Paquet de RedWood ............. $15</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonCountryStore;