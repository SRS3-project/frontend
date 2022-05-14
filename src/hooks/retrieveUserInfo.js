import axios from '../api/axios';
import { useContext } from "react";
import UserContext from "../context/UserProvider";

const retrieveUserInfo = () => {
    /* const { user, setUser } = useContext(UserContext); */

    const updateUserInfo = () => {
        const { setUser } = useContext(UserContext);

        const retreiveInfo = async () => {
            setUser({});
            try {
            /* bisogna mettere a posto la richiesta axios */
                const response = await axios('/logout', {
                    withCredentials: true
                });
            } catch (err) {
                console.error(err);
            }
        }
        
        console.log(user);

        return retreiveInfo;
    }
    
    return updateUserInfo;
}

export default retrieveUserInfo


