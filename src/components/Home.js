import LateralMenu from "./LateralMenu/LateralMenu";
import TechPanel from "./ElementPanels/TechPanel";
import ResourcePanel from "./ElementPanels/ResourcePanel";
import { Columns, Footer, Notification } from "react-bulma-components";
import 'bulma/css/bulma.min.css';
import Logo from "../images/logo.png"

const Home = () => {
/*   const navigate = useNavigate();
*    const logout = useLogout();
*
*    const signOut = async () => {
*        await logout();
*        navigate('/linkpage');
*    }
*/    
    return (
        <>
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
                    <br />
                    <p>You are logged in!</p>
                </Notification>
                <br />
                <Notification color="link">
                    <TechPanel/>
                </Notification>
            </Columns.Column >
        </Columns>
        </>
    );
}

export default Home;