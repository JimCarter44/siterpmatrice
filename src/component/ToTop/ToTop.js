import "./ToTop.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

function ToTop () {
    $( function () {
        let toTop = $(".toTop");
        toTop.click(function () {
            console.log("Test");
            $('html').animate({scrollTop:0}, 1000);
        });
    });
    const topStyle = {
        backgroundColor: "#760000",
        border: "5px solid #841f1f",
    }
    return(
        <div className="toTop" style={topStyle}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    );
}

export default ToTop;