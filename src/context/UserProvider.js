import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState({});

    return (
        <UserContext.Provider value={{ username, setUsername}}>
            {children}
        </UserContext.Provider>
    )
}

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