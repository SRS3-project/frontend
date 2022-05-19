import { useContext } from "react";
import UserContext from "../context/UserProvider";

const useUser = () => {
	const { user } = useContext(UserContext);
	console.log("User provider say: ", user);
	return useContext(UserContext);
};

export default useUser;
