import React, { useState } from "react";
import Gauge from "../Gauge/Gauge";
import useUser from "../../hooks/useUser";

function CastlePanel() {
	const { user } = useUser();

	const isValid = (arg) => {
		return (
			arg !== null &&
			arg !== "" &&
			arg !== undefined &&
			Object.keys(arg).length !== 0
		);
	}
	

	return (
		<>
			{isValid(user) ? (
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
