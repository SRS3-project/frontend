import React from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./builder.css";
import { useState } from "react";
import { axiosUser } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";
import Button from "../Button/Button"


const TROOPBUILD_URL = "/player/techs";

const TechBuilder = ({ item }) => {
	// For The Async Build Request
	const { user } = useUser();
	const { auth } = useAuth();

	// For Component Functionality
	const [upgrade, setUpgrade] = useState({});

	const isUpgradable = () => {
		const foodNeeded = (user.resource[0].amount >= item.cost.food);
        const goldNeeded = (user.resource[1].amount >= item.cost.gold);
		const mineralNeeded = (user.resource[2].amount >= item.cost.minerals);
		const woodNeeded = (user.resource[3].amount >= item.cost.wood);

		return (foodNeeded && goldNeeded && mineralNeeded && woodNeeded);
	}


	const buildTroopsRequest = async (toBuild) => {
		console.log("POST Request: Build troops");

		if (validInput) {
			try {
				const requestUrl = `${TROOPBUILD_URL}`;
				console.log("requestUrl: ", requestUrl);

				const response = await axiosUser.post(
					requestUrl,
					{ toBuild },
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

		console.log("Submitted: ", build.amount, "x", build.type);

		//additem
		buildTroopsRequest(build);

		setBuild("");

		if (!build) return;

		//console.log('end handleSubmmit');

		setVal("");
	};

	return (
		<form className="buildForm" onSubmit={handleSubmmit}>
			<label htmlFor="buildItem" style={{ display: "none" }}>
				{" "}
				Add Item
			</label>
			<input
				className="input"
				//autoFocus
				id="itemBuild"
				type="text"
				placeholder={item.name}
				required
				value={val}
				onChange={(e) => {
					setVal(e.target.value);
					setBuild({
						type: `${item.id.toUpperCase()}`,
						amount: {maxUnitsBuildable},
					});
					//console.log(`${build.type}:${build.ammount}`);
				}}
			/>
			<button 
				type="submit" 
				aria-label="Build"
				disabled = {false} //isBuildable
				>
				<FaPlus />
			</button>
		</form>
	);
};

export default TechBuilder;
