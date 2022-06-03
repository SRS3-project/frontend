import React, { useState } from "react";
import Gauge from "../Gauge/Gauge";
import useUser from "../../hooks/useUser";

function CastlePanel() {
	const { user } = useUser();

	return (
		<>
			<h1>Experience gauge to show experience growth until level up</h1>
			<br />
			<h2>Actual level: {user?.level}</h2>
			<Gauge
				value={user.xp % 100}
				min={0}
				max={(user.xp % 100) + 100}
				//max={user.level*100}
				label="Experience"
				units=""
			/>
		</>
	);
}

export default CastlePanel;
