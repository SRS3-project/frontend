import React from 'react'
import axios from '../api/axios';
import UserContext from "../context/UserProvider";

const retrieveUserInfo = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    /* useDebugValue(user, auth => auth?.user ? "Logged In" : "Logged Out") */
    return useContext(UserContext);
}

export default retrieveUserInfo


/* to use a s try catch example to retrieve info*/

/* const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
} */