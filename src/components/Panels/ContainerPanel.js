import React, { useState } from "react";
import TroopPanel from "./TroopPanel";
import TechPanel from "./TechPanel";
import BarracsPanel from "./BarracsPanel";

const ContainerPanel = ({ filter, setInfo }) => {
	switch (filter) {
		case "barracs":
			return BarracsPanel(setInfo);
		case "tower": {
			return TechPanel(setInfo);
		}
		case "troops":
			return TroopPanel(setInfo);
		default: {
		}
	}
};

export default ContainerPanel;
