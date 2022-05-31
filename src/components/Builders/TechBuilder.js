import React from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./builder.css";
import { axiosUser } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";


const TROOPBUILD_URL = "/player/techs";

const TechBuilder = ({ item }) => {
	// For The Async Build Request
	const { user } = useUser();
	const { auth } = useAuth();

	const isUpgradable = () => {
		const foodNeeded = (user.resources[0]?.amount >= item.cost.food);
        const goldNeeded = (user.resources[1]?.amount >= item.cost.gold);
		const mineralNeeded = (user.resources[2]?.amount >= item.cost.minerals);
		const woodNeeded = (user.resources[3]?.amount >= item.cost.wood);


		return (foodNeeded && goldNeeded && mineralNeeded && woodNeeded);
	}


	const upgradeTechRequest = async () => {
		console.log("POST Request: Build troops");

		if (isUpgradable()) {
			try {
				const requestUrl = `${TROOPBUILD_URL}`;
				console.log("requestUrl: ", requestUrl);

				const response = await axiosUser.upgrade(
					requestUrl,
					{
                        "username": `${user.username}`,
                        "type": `${item.id.toUpperCase()}`,
                        "level": `${item.level+1}`
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
				console.log(response);
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
			}
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
			id="TechButton"
            type="submit" 
            aria-label="Build"
            disabled = {!isUpgradable()}
            onClick = {handleClick}
            >
            <FaPlus />
        </button>
	);
};

export default TechBuilder;
