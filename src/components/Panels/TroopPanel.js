import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import { Columns, Notification } from "react-bulma-components";
import styles from "./items.panels.css";
import useUser from "../../hooks/useUser";
import en from "../../locales/en.json"

const TROOPS_DEFINITIONS  = en.troops;

function TroopPanel(setInfo) {
	const { user } = useUser();

	const troops_mock = user.troops.map((troop) => troop.type);
	//console.log({troops_mock});

	const getTroopAmount = (id) => {
		return user.troops[troops_mock.indexOf(id.toUpperCase())].amount;
	}

	return (
		<>
			<Columns multiline centered className="troops">
				<Columns.Column size={12} className="civilian_units">
					<Notification color="link">
						<h3>Unita' Civili</h3>
					</Notification>
					<ul id="horizontal-list">
						{TROOPS_DEFINITIONS.map((unit) =>
							unit.type === "civilian" ? (
								<li key={unit.id}>
									<ItemBox
										topLabel={unit.name}
										image="logo192.png"
										bottomLabel={getTroopAmount(unit.id)}
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
						{TROOPS_DEFINITIONS.map((unit) =>
							unit.type === "military" ? (
								<li key={unit.id}>
									<ItemBox
										topLabel={unit.name}
										image="logo192.png"
										bottomLabel={getTroopAmount(unit.id)}
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
