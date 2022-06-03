import React, { useState } from "react";
import Gauge from "../Gauge/Gauge";
import useUser from "../../hooks/useUser";

function CastlePanel() {
	const { user } = useUser();

	const isUserValid = () => {
		return (
			user !== null &&
			user !== "" &&
			user !== undefined &&
			Object.keys(user).length !== 0
		);
	}
	

	return (
		<>
			{isUserValid() ? (
				<Gauge
				value={user?.xp}
				min={user?.xp - (user.xp % 100)}
				max={user?.xp - (user.xp % 100) + 100}
				//max={user.level*100}
				label="Experience"
				units=""
			/>
			) : (
				<div>User Loading</div>
			)}
		</>
	);
}

export default CastlePanel;
