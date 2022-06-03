import React, { useEffect } from "react";
import UsersListItem from "./UsersListItem";
import useUser from "../../hooks/useUser";

const WorldPanel =({scoreboard, setInfo}) => {

	const {user} = useUser();

	const isUserValid = () => {
		return (
			user !== null &&
			user !== "" &&
			user !== undefined &&
			Object.keys(user).length !== 0
		);
	}

	const isDataValid = () => {
		return (
			scoreboard !== null &&
			scoreboard !== "" &&
			scoreboard !== undefined &&
			Object.keys(user).length !== 0 &&
			isUserValid()
		);
	}

	return(
		<>
			{isDataValid() ? (
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