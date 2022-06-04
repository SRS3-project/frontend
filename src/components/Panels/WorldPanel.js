import React, { useEffect } from "react";
import UsersListItem from "./UsersListItem";
import useUser from "../../hooks/useUser";
import { IsDataValid } from "../../utils/checkParams";

const WorldPanel =({scoreboard, setInfo}) => {

	const {user} = useUser();
	const leaders = scoreboard.sort((a, b) => a.xp < b.xp ? 1 : -1)

	return(
		<>
			{IsDataValid(leaders,user) ? (
				<ul>
					{
						leaders.map((player) => (
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