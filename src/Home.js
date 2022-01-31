import './Home.css';
import Header from "./component/Header";

function Home() {
    return(
        <div>
            <Header />
            <div className="homeDisplay">
                <div className="randomPub">
                    <div className="pubBorder">
                        <p>PUBLICITÉ SPONSORISÉE</p>
                        <img src="" alt="" className="picturePub"/>
                    </div>
                    <div className="pubBorder">
                        <p>PUBLICITÉ SPONSORISÉE</p>
                        <img src="" alt="" className="picturePub"/>
                    </div>
                    <div className="pubBorder">
                        <p>PUBLICITÉ SPONSORISÉE</p>
                        <img src="" alt="" className="picturePub"/>
                    </div>
                </div>
                <div className="randomInsertZone">
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                </div>
                <div className="randomInsertZone">
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                    <img src="" alt="" className="randomInsert"/>
                </div>
            </div>
        </div>
    );
}

export default Home;