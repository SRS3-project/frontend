import React, { useEffect } from "react";
import UsersListItem from "./UsersListItem";
import useUser from "../../hooks/useUser";

const WorldPanel =({scoreboard, setInfo}) => {

	const {user} = useUser();

	const isValid = (arg) => {
		return (
			arg !== null &&
			arg !== "" &&
			arg !== undefined &&
			Object.keys(arg).length !== 0
		);
	}

	const isDataValid = (arg1, arg2) => {
		return (
			arg1 !== null &&
			arg1 !== "" &&
			arg1 !== undefined &&
			Object.keys(arg1).length !== 0 &&
			isValid(arg2)
		);
	}

	return(
		<>
			{isDataValid(scoreboard,user) ? (
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