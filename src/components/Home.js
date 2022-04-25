import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import LateralMenu from "./LateralMenu";
import Button from "./Button/Button";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return (
        <>
            <section>
                <h1>Home</h1>
                <br />
                <p>You are logged in!</p>
                <br />
                <Link to="/editor">Go to the Editor page</Link>
                <br />
                <Link to="/admin">Go to the Admin page</Link>
                <br />
                <Link to="/lounge">Go to the Lounge</Link>
                <br />
                <Link to="/linkpage">Go to the link page</Link>
                <Button label='Sign Out' onClick={signOut}/>
            </section>
            <LateralMenu />
        </>
    )
}

export default Home
