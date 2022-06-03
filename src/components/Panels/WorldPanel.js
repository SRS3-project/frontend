import React, { useEffect } from "react";
import UsersListItem from "./UsersListItem";
import useUser from "../../hooks/useUser";
import { IsDataValid } from "../../utils/checkParams";

const WorldPanel =({scoreboard, setInfo}) => {

	const {user} = useUser();

	return(
		<>
			{IsDataValid(scoreboard,user) ? (
				<ul>
					{
						scoreboard.map((player) => (
						(player.username !== user.username) && 
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