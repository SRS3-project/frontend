import React, { useState } from "react";
import TroopPanel from "./TroopPanel";
import TechPanel from "./TechPanel";
import BarracsPanel from "./BarracsPanel";


const ContainerPanel = ({filter, element, setInfo}) => {
	
    switch(filter) {
        case "barracs":
          return BarracsPanel(element, setInfo);
        case "tower":
          {return TechPanel(element, setInfo);}
        case "troops":
          return TroopPanel(element, setInfo);
        default:
          {};
      }
};

export default ContainerPanel;
