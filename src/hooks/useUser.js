import { useContext } from "react";
import UserContext from "../context/UserProvider";



const useUser = () => {
	const { user } = useContext(UserContext);
	//console.log("useUser say: ", user);
	return useContext(UserContext);
};

export default useUser;
