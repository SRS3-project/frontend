import LateralMenu from "./LateralMenu/LateralMenu";
import TechPanel from "./ElementPanels/TechPanel";
import ResourcePanel from "./ElementPanels/ResourcePanel";
import { Columns, Notification } from "react-bulma-components";
/* import { Footer } from "react-bulma-components"; */
import Logo from "../images/logo.png";
import UserBox from "./UserBox/UserBox";
import Footer from "./Footer/Footer";
import { UserProvider } from "../context/UserProvider";


function Home() {  
    return (
        <>
            <UserProvider>
                <Columns multiline centered>
                    <Columns.Column size={3}>
                        <img src={Logo}/>
                    </Columns.Column>
                    <Columns.Column size={6}>
                        <Notification color="link">
                            <h1 class="gameName">dr.Ogame</h1>
                        </Notification>
                        <Notification color="link">
                            <ResourcePanel/>
                        </Notification>
                    </Columns.Column>
                    <Columns.Column size={3}>
                        <Notification color="link">
                            <UserBox/>
                        </Notification>
                    </Columns.Column>

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

                <Columns.Column size={12}>
                    <Notification color="link">
                        <Footer/>
                    </Notification>
                </Columns.Column>
<<<<<<< HEAD
            </Columns.Column>
            <Columns.Column size={3}>
                <h1>Aggiungere pannello giocatore</h1>
            </Columns.Column>

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
{/*
        <div class="booty">
            <Footer/>
        </div>
*/}
=======
            
            </UserProvider>
   
>>>>>>> master
        </>
    );
}

export default Home;