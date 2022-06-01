import React, { useState } from "react";
import TroopPanel from "./TroopPanel";
import TechPanel from "./TechPanel";
import BarracsPanel from "./BarracsPanel";
import CastlePanel from "./CastlePanel";
import WorldPanel from "./WorldPanel";

const ContainerPanel = ({ filter, setInfo }) => {
	switch (filter) {
		case "castle":
			return CastlePanel(setInfo);
		case "barracs":
			return BarracsPanel(setInfo);
		case "tower":
			return TechPanel(setInfo);
		case "troops":
			return TroopPanel(setInfo);
		case "world":
			return WorldPanel(setInfo);
		default: {}
	}
};

export default ContainerPanel;
