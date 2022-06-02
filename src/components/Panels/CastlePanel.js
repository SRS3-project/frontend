import React, { useState } from "react";
import Gauge from "../Gauge/Gauge";
import useUser from "../../hooks/useUser"
const CastlePanel = ({ filter, setInfo }) => {

  const {user} = useUser();

  return(
    <>
          
      <Gauge 
        value={user.xp}
        min={0}
        max={user.level*100}
        label="Experience"
        units=""
      />
    </>
  );
};

export default CastlePanel;
