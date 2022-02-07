import './PDM.css';
import Navigator from "../../component/Navigator/Navigator";
import imgPDMHead from "../../img/imgPDMHead.png";

function PDM() {
    return(
      <div>
          <Navigator value="www.premuimdeluxemotorsport.com" />
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
                          <option value="super" className="optionCSSPDM">Supers</option>
                          <option value="van" className="optionCSSPDM">Vans</option>
                      </select>
                      <select name="filter" id="filterPDM">
                          <option value="price" className="optionCSSPDM">Trier par prix</option>
                          <option value="name" className="optionCSSPDM">Trier par nom</option>
                      </select>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default PDM;