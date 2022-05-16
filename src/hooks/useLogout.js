import axios from "../api/axios";
import { useContext } from "react";
import useAuth from "./useAuth";

import UserContext from "../context/UserProvider";

const LOGOUT_URL = '/logout';

const useLogout = () => {
    const { setAuth } = useAuth();
    const { username } = useContext(UserContext);

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.put(LOGOUT_URL,
                { username: username },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout