import LateralMenu from "./LateralMenu/LateralMenu";
import TechPanel from "./ElementPanels/TechPanel";
import ResourcePanel from "./ElementPanels/ResourcePanel";
import { Columns, Notification } from "react-bulma-components";
import 'bulma/css/bulma.min.css';
import Logo from "../images/logo.png"
import Header from "./Header/Header";
import Footer from "./Footer/Footer"


function Home() {  
    return (
        <>
        <div class="topInfo">
            <Header/>
        </div>
        <Columns multiline centered>
            <Columns.Column size={3}>
                <img src={Logo}/>
            </Columns.Column>
            <Columns.Column size={6}>
                <Notification color="link">
                    <ResourcePanel/>
                </Notification>
                <Columns.Column>
                    <Notification color="link">
                        <h1 class="gameName">dr.Ogame</h1>
                    </Notification>
                </Columns.Column>
            </Columns.Column>
            <Columns.Column size={3}></Columns.Column>

            <Columns.Column size={4}>
                <Notification color="link">
                    <LateralMenu />
                </Notification>
            </Columns.Column>
            <Columns.Column size="auto">
                <Notification color="link">
                    <h1>Home</h1>
                    <p>You are logged in!</p>
                </Notification>
                <br />
                <Notification color="link">
                    <TechPanel/>
                </Notification>
            </Columns.Column >
        </Columns>
        <div class="booty">
            <Footer/>
        </div>
        </>
    );
}

export default Home;