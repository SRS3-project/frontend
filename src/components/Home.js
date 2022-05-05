import LateralMenu from "./LateralMenu/LateralMenu";
import TechPanel from "./ElementPanels/TechPanel";
import ResourcePanel from "./ElementPanels/ResourcePanel";
import { Columns, Notification } from "react-bulma-components";
import 'bulma/css/bulma.min.css';

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
            <Columns.Column size={3}></Columns.Column>
            <Columns.Column size={6}>
                <Notification color="link">
                    <ResourcePanel/>
                </Notification>
            </Columns.Column>
            <Columns.Column size={3}></Columns.Column>

            <Columns.Column size={6}>
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