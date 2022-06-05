import React from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./builder.css";
import { axiosUser } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";


const STRUCTBUILD_URL = "/player/structures";

const StructureBuilder = ({ item }) => {
	// For The Async Build Request
	const { user, setUser } = useUser();
	const { auth } = useAuth();

	const isUpgradable = () => {
		const foodNeeded = (user.resources[0]?.amount >= item.cost.food);
        const goldNeeded = (user.resources[1]?.amount >= item.cost.gold);
		const mineralNeeded = (user.resources[2]?.amount >= item.cost.minerals);
		const woodNeeded = (user.resources[3]?.amount >= item.cost.wood);
		//const woodNeeded = (user.resources[3]?.amount >= Math.pow(2,getUserTechLevel())*item.cost.wood);


		return (foodNeeded && goldNeeded && mineralNeeded && woodNeeded);
	}
	
	const getUserBuildLevel = () => {
		return user.structures?.find((el) => el.type == `${item.id.toUpperCase()}`).level;
	}

	const upgradeTechRequest = async () => {
		console.log("POST Request: Upgrade Building");

		if (isUpgradable()) {
			/* try {
				const requestUrl = `${STRUCTBUILD_URL}`;
				console.log("requestUrl: ", requestUrl);

				const response = await axiosUser.patch(
					requestUrl,
					{
                        username: `${user.username}`,
                        type: `${item.id.toUpperCase()}`,
                        level: getUserBuildLevel()+1
                    },
					{
						headers: {
							"Content-Type": "application/json",
							//new backend
							Authorization: `Bearer ${auth.accessToken}`,
							//old backend
							//Authorization: auth.accessToken,
						},
						withCredentials: true,
					}					
				);
				setUser(response.data);
				console.log(response.data);
			} catch (err) {
				//console.log(err);
				if (!err?.response) {
					console.log("FETCH USER DATA: No Server Response");
				} else if (err.response?.status === 401) {
					console.log("FETCH USER DATA: Unauthorized");
				} else {
					console.log("FETCH USER DATA: Unknown error");
				}
			} finally {
				console.log("user: ", user);

			} */
            console.log('Structure Upgraded')
		} else {
			console.log("Empty State: Request Not Executed");
		}
	};

	const handleClick = (e) => {
		e.preventDefault();

        if (!item) return;

		console.log(`Submitted ${item.name} at Level: ${item.level+1}`);

        //additem
		upgradeTechRequest();
		//console.log('end handleSubmmit');
	};

	return (		
        <button
			id="BuildButton"
            type="buildUpgrade" 
            aria-label="Build"
            disabled = {!isUpgradable()}
            onClick = {handleClick}
            >
            <FaPlus />
        </button>
	);
};

export default StructureBuilder;
