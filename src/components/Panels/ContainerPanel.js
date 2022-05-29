import React, { useState } from "react";
import TroopPanel from "./TroopPanel";
import TechPanel from "./TechPanel";
import BarracsPanel from "./BarracsPanel";

const ContainerPanel = ({ filter, elements, setInfo }) => {
	switch (filter) {
		case "barracs":
			return BarracsPanel(elements, setInfo);
		case "tower": {
			return TechPanel(elements, setInfo);
		}
		case "troops":
			return TroopPanel(elements, setInfo);
		default: {
		}
	}
};

export default ContainerPanel;
