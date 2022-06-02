import axios from "../api/axios";
import useAuth from "./useAuth";

const LOGOUT_URL = "/logout";

const useLogout = () => {
	const { setAuth } = useAuth();

	const logout = async () => {
		/* try {
            const response = await axios.post(LOGOUT_URL,
                { username: username },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
        } catch (err) {
            console.error(err);
        } */
		localStorage.setItem("auth", "{}");
		setAuth({});
	};

	return logout;
};

export default useLogout;
