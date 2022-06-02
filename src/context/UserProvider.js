import { createContext, useEffect, useState } from "react";

const mock = {
    "troops": [
        {
            "type": "ARCHER",
            "amount": 0
        },
        {
            "type": "CARAVAN",
            "amount": 0
        },
        {
            "amount": 0,
            "type": "CROSSBOWMAN"
        },
        {
            "amount": 0,
            "type": "DRAGON"
        },
        {
            "type": "GROUNDTROLL",
            "amount": 0
        },
        {
            "amount": 0,
            "type": "INFANTRYMAN"
        },
        {
            "amount": 0,
            "type": "JACKAL"
        },
        {
            "amount": 0,
            "type": "KNIGHT"
        },
        {
            "amount": 0,
            "type": "NEUROMANCER"
        },
        {
            "type": "SETTLERS",
            "amount": 0
        },
        {
            "amount": 0,
            "type": "SPY"
        },
        {
            "amount": 0,
            "type": "TITAN"
        },
        {
            "type": "WANDERERS",
            "amount": 0
        },
        {
            "type": "WAREAGLE",
            "amount": 0
        }
    ],
    "techs": [
        {
            "type": "ARCANOMANCY",
            "level": 0
        },
        {
            "type": "ARMORS",
            "level": 0
        },
        {
            "level": 0,
            "type": "AXES"
        },
        {
            "type": "CRUCIBLE",
            "level": 0
        },
        {
            "level": 0,
            "type": "EAGLES"
        },
        {
            "type": "ESPIONAGE",
            "level": 0
        },
        {
            "type": "EXPOLRATION",
            "level": 0
        },
        {
            "level": 0,
            "type": "LOGISTIC"
        },
        {
            "type": "MOUNTS",
            "level": 0
        },
        {
            "level": 0,
            "type": "PICKS"
        },
        {
            "level": 0,
            "type": "SPACEANDTIME"
        },
        {
            "type": "STORAGE",
            "level": 0
        },
        {
            "type": "STRATEGY",
            "level": 0
        },
        {
            "level": 0,
            "type": "TARTARUS"
        },
        {
            "type": "WAGONS",
            "level": 1
        },
        {
            "type": "WEAPONS",
            "level": 0
        }
    ],
    "level": 1,
    "y": 2,
    "resources": [
        {
            "type": "FOOD",
            "amount": 253
        },
        {
            "amount": 379,
            "type": "GOLD"
        },
        {
            "amount": 759,
            "type": "MINERALS"
        },
        {
            "amount": 506,
            "type": "WOOD"
        }
    ],
    "x": 1,
    "updatedAt": 1654039032063,
    "xp": 100,
    "attack": [],
    "createdAt": 1653944666666,
    "username": "n0on3"
}

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	//console.log("UserProvider say: ", user);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
