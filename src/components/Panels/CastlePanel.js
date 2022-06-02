import React, { useState } from "react";
import Gauge from "../Gauge/Gauge";
import useUser from "../../hooks/useUser"

function CastlePanel() {

  const {user} = useUser();

  return(
    <>
          
      <Gauge 
        value={user.xp}
        min={user.xp % user.level}
        max={(user.xp % user.level)+100}
        //max={user.level*100}
        label="Experience"
        units=""
      />
    </>
  );
};

export default CastlePanel;
