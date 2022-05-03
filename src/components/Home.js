import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import LateralMenu from "./LateralMenu/LateralMenu";
import Button from "./Button/Button";
import "bulma/sass/utilities/_all.sass"
import "bulma/sass/components/menu.sass"
import "bulma/sass/grid/columns.sass"
import TechPanel from "./ElementPanels/TechPanel";
import ResourcePanel from "./ElementPanels/ResourcePanel";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return (
        <>
        <div>
            <ResourcePanel/>
        </div>
        <div><br></br></div>         
        <div class="columns">
            <div class="column is-6">                    
                <LateralMenu />               
            </div>
            <div class="column is-8">
                <section>
                    <h1>Home</h1>
                    <br />
                    <p>You are logged in!</p>
                    <br />
                    <br />
                    <br />
                    <section>
                        <TechPanel/>
                        {/*
                        <Link to="/editor">Go to the Editor page</Link>
                        <br />
                        <Link to="/admin">Go to the Admin page</Link>
                        <br />
                        <Link to="/lounge">Go to the Lounge</Link>
                        <br />
                        <Link to="/linkpage">Go to the link page</Link>
                        <Button label='Sign Out' onClick={signOut}/>
                        */}
                    </section>
                </section>
            </div>
        </div>
        </>
        )
}

export default Home
