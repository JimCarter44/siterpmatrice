import "./ToTop.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

function ToTop (props) {
    $( function () {
        let toTop = $(".toTop");
        toTop.click(function () {
            console.log("Test");
            $('html').animate({scrollTop:0}, 1000);
        });
    });

    return(
        <div className="toTop" id={props.id}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    );
}

export default ToTop;