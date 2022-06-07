import React, { useState, useEffect } from "react";
import Gauge from "../Gauge/Gauge";
import useUser from "../../hooks/useUser";

function CastlePanel() {
	const { user } = useUser();
	//const [minExp, setMinExp] = useState(0);
	//const [maxExp, setMaxExp] = useState(0);

	const isValid = (arg) => {
		return (
			arg !== null &&
			arg !== "" &&
			arg !== undefined &&
			Object.keys(arg).length !== 0
		);
	};

	/* useEffect(() => {
		let maxXp = 0;
		const level = user?.level || 1;
		for (let i = 1; i <= level; i++) {
			maxXp += i * 100;
		}
		setMaxExp(maxXp);
		setMinExp(maxXp - level * 100);
	}, [user]); */

	return (
		<>
			{isValid(user) ? (
				<Gauge
					value={user?.xp}
					/* min={minExp}
					max={maxExp} */
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

//Frontend to calculate min e max for gauge
/* const calcXpBound = (lvl) => {
	let minXp = 0;
	let maxXp = 0;
	for (let i = 1; i <= lvl; i++) {
		maxXp += i * 100;
	}
	min = max - lvl*100;
}; */

//Game-backend to calculate the level
/* const calcLvl = (xp) => {
	let lvl = 0;
	while (xp>=0){
		lvl ++;
		xp -= lvl * 100;
	}
	return lvl;
} */

export default CastlePanel;
