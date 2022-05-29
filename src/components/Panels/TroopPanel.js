import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import { Columns, Notification } from "react-bulma-components";
import styles from "./items.panels.css";
import useUser from "../../hooks/useUser";
//this should read the player tecnlogies tree

function TroopPanel(units, setInfo) {
	const { user, setUser } = useUser();

	return (
		<>
			<Columns multiline centered className="troops">
				<Columns.Column size={12} className="civilian_units">
					<Notification color="link">
						<h3>Unita' Civili</h3>
					</Notification>
					<ul id="horizontal-list">
						{units.map((unit) =>
							unit.type === "civilian" ? (
								<li key={unit.id}>
									<ItemBox
										topLabel={unit.name}
										image="logo192.png"
										//bottomLabel={user.troops.{unit.id}.ammount}
										bottomLabel={unit.quantity}
										onClick={(e) => {
											e.preventDefault();
											setInfo(unit);
										}}
									/>
								</li>
							) : null
						)}
					</ul>
				</Columns.Column>

				<Columns.Column size={12} className="military_units">
					<Notification color="link">
						<h3>Unita' Militari</h3>
					</Notification>
					<ul id="horizontal-list">
						{units.map((unit) =>
							unit.type === "military" ? (
								<li key={unit.id}>
									<ItemBox
										topLabel={unit.name}
										image="logo192.png"
										bottomLabel={unit.quantity}
										onClick={(e) => {
											e.preventDefault();
											setInfo(unit);
										}}
									/>
								</li>
							) : null
						)}
					</ul>
				</Columns.Column>
			</Columns>
		</>
	);
}

export default TroopPanel;
