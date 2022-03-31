import './Vehicles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function Vehicles (props) {
    return(
        <div className={props.class}>
          <div className="blockVehicles">
            <div className="titleBlock">
                <h4>{props.name}</h4>
                <div className="placesBlock">
                    <FontAwesomeIcon icon={faUser}/>
                    <p>{props.places}</p>
                </div>
            </div>
            <img className="blockImg" src={props.src} alt={props.alt}/>
            <div className="detailsBlock">
                <div className="perfsBlock">
                    <div className="leftBlock">
                        <p>Carburant : {props.fuel}</p>
                        <p>Traction : {props.train}</p>
                    </div>
                    <div className="rightBlock">
                        <p>Vmax Moy : {props.speed} Mph</p>
                        <p>Coffre : {props.chest} L / {props.site} Places</p>
                    </div>
                </div>
                <div className="lastDetails">
                    <img className="brand" src={props.srcBrand} alt={props.altBrand}/>
                    <h3>{props.brand}</h3>
                </div>
            </div>
            <h2>Prix: {props.price}$</h2>
          </div>
        </div>
    );
}

export default Vehicles;