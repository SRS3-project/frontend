import React, { useState } from "react";
import Gauge from "../Gauge/Gauge";
import useUser from "../../hooks/useUser"

function CastlePanel() {

  const {user} = useUser();

  return(
    <>
      <div id="gauge">
        <Gauge 
          value={user.xp}
          min={user.xp % user.level}
          max={((user.level+1)*100)}
          //max={user.level*100}
          label="Experience"
          units=""
        />
      </div>
    </>
  );
};

export default CastlePanel;
