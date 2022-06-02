import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { axiosUser } from "../../api/axios";
import UsersListItem from "./UsersListItem";

const USERINFO_URL = "/player";

const WorldPanel =({scoreboard, setInfo}) => {

	return(
		<>
			{scoreboard ? (
				<ul>
					{
						scoreboard.map((player) => (
						<UsersListItem
							key={player.username}
							opponent={player}
							setInfo={setInfo}
						/>
						))
					}
				</ul>
			) : (
				<div>Please Reload the Page</div>
			)}
		</>
	);
};

export default WorldPanel;