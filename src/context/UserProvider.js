import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	console.log("UserProvider say userinfo: ", user);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;

/* const user = {
    anagrafica: {
        nome,cognome
    },
    materiali: {
        minerali,legno,oro,cibo
    }
    armate: {
        soldati,arcieri
    }
} */
