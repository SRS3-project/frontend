import axios from "../api/axios";
import { useContext } from "react";
import useAuth from "./useAuth";

import UserContext from "../context/UserProvider";

const LOGOUT_URL = '/logout';

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        localStorage.setItem('auth', '{}');
        setAuth({});
    }

    return logout;
}

export default useLogout