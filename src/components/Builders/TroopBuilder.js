import React from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./builder.css";
import { useState } from "react";
import { axiosUser } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";

const TROOPBUILD_URL = "/game/build";
const NUMBER_REGEX = /^[0-9]+$/;

const TroopBuilder = ({ item }) => {
	// For The Async Build Request
	const { user, setUser } = useUser();
	const { auth } = useAuth();
	const [validInput, setValidInput] = useState(false);

	// For Component Functionality
	const [val, setVal] = useState("");

	useEffect(() => {
		setValidInput(NUMBER_REGEX.test(val));
	}, [val]);

	const maxUnitsBuildable = (val) => {
		const goldUnits = Math.floor(user.resources[1].amount / item.cost.gold);
		const mineralUnits = Math.floor(
			user.resources[2].amount / item.cost.minerals
		);
		const woodUnits = Math.floor(user.resources[3].amount / item.cost.wood);

		const maxBuildable = Math.min(goldUnits, mineralUnits, woodUnits);

		return val <= maxBuildable ? val : maxBuildable;
	};

	/* const isBuildable = () => {
		return (
			user.resources[1].amount >= 0 &&
			user.resources[2].amount >= 0 &&
			user.resources[3].amount >= 0
		);
	}; */

	const handleClick = async (e) => {
		e.preventDefault();

		console.log("POST Request: Build troops");
		console.log(
			"Submitted: ",
			item.id.toUpperCase(),
			"x",
			maxUnitsBuildable(val)
		);

		try {
			console.log("requestUrl: ", TROOPBUILD_URL);

			const response = await axiosUser.post(
				TROOPBUILD_URL,
				{
					type: item.id.toUpperCase(),
					amount: parseInt(maxUnitsBuildable(val)),
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${auth.accessToken}`,
					},
					withCredentials: true,
				}
			);
			localStorage.setItem("user", JSON.stringify(response.data));
			setUser(response.data);
			console.log("buildTroopResponse: ", response.data);
			setVal("");
		} catch (err) {
			//console.log(err);
			if (!err?.response) {
				console.log("FETCH USER DATA: No Server Response");
			} else if (err.response?.status === 401) {
				console.log("FETCH USER DATA: Unauthorized");
			} else {
				console.log("FETCH USER DATA: Unknown error");
			}
		}
	};

	return (
		<form className="buildForm" onSubmit={handleClick}>
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
				}}
			/>
			<button
				id="TroopBuilder"
				type="barracs"
				aria-label="Build"
				disabled={!validInput}
			>
				<FaPlus />
			</button>
		</form>
	);
};

export default TroopBuilder;
