import React, { useState } from "react";
import TroopPanel from "./TroopPanel";
import TechPanel from "./TechPanel";
import BarracsPanel from "./BarracsPanel";
import CastlePanel from "./CastlePanel";
import WorldPanel from "./WorldPanel";
import OverviewPanel from "./OverviewPanel";

const ContainerPanel = ( {filter, setInfo, scoreboard} ) => {
		
	switch (filter) {
		case "castle":
			return(
				<CastlePanel />
			);
		case "barracs":
			return(
				<BarracsPanel
					setInfo = {setInfo}
				/>
			);
		case "tower":
			return(
				<TechPanel
					setInfo = {setInfo}
				/>
			);
		case "troops":
			return(
				<TroopPanel
					setInfo = {setInfo}
				/>
			);
		case "world":
			return(
				<WorldPanel
					scoreboard={scoreboard}
					setInfo = {setInfo}
				/>
			);
		default:
			return(
				<OverviewPanel />
			)
	}
};

export default ContainerPanel;
