import './LSToday.css';
import Navigator from "../../component/Navigator/Navigator";

function LSToday() {
    return(
        <div>
            <Navigator />
            <header>
                <img src="" alt="logo LSToday"/>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Editions</li>
                        <li>Abonnements</li>
                        <li>Services</li>
                    </ul>
                </nav>
            </header>
            <div className="LSTodayBody">

            </div>
        </div>
    );
}

export default LSToday;