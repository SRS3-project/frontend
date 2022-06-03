import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import { Columns, Notification } from "react-bulma-components";
import styles from "./items.panels.css";
import useUser from "../../hooks/useUser";
import en from "../../locales/en.json";

import caravan from "../../images/troops/civilian/caravan.png";
import jackal from "../../images/troops/civilian/jackal.png";
import settlers from "../../images/troops/civilian/settlers.png";
import spy from "../../images/troops/civilian/spy.png";
import wanderers from "../../images/troops/civilian/wanderers.png";

import archer from "../../images/troops/military/archer.png";
import crossbowman from "../../images/troops/military/crossbowman.png";
import dragon from "../../images/troops/military/dragon.png";
import groundtroll from "../../images/troops/military/groundtroll.png";
import infantryman from "../../images/troops/military/infantryman.png";
import knight from "../../images/troops/military/knight.png";
import neuromancer from "../../images/troops/military/neuromancer.png";
import titan from "../../images/troops/military/titan.png";
import wareagle from "../../images/troops/military/wareagle.png";
import { IsValid } from "../../utils/checkParams";

const TROOPS_DEFINITIONS = en.troops;

const troops = [
	{ image: archer, name: "ARCHER" },
	{ image: caravan, name: "CARAVAN" },
	{ image: crossbowman, name: "CROSSBOWMAN" },
	{ image: dragon, name: "DRAGON" },
	{ image: groundtroll, name: "GROUNDTROLL" },
	{ image: infantryman, name: "INFANTRYMAN" },
	{ image: jackal, name: "JACKAL" },
	{ image: knight, name: "KNIGHT" },
	{ image: neuromancer, name: "NEUROMANCER" },
	{ image: settlers, name: "SETTLERS" },
	{ image: spy, name: "SPY" },
	{ image: titan, name: "TITAN" },
	{ image: wanderers, name: "WANDERERS" },
	{ image: wareagle, name: "WAREAGLE" },
];

const TroopPanel = ( {setInfo} ) => {
	const { user } = useUser();

	//const troops_mock = user.troops.map((troop) => troop.type);
	//console.log({troops_mock});

	const getTroopAmount = (id) => {
		return user.troops.find((el) => el.type == `${id.toUpperCase()}`)
			.amount;
	};

	const getImage = (id) => {
		const image = troops.find((el) => el.name === id.toUpperCase()).image;
		return image;
	};

	return (
		<>
			{IsValid(user) ? (
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
										image={getImage(unit.id)}
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
										image={getImage(unit.id)}
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
			) : (
				<div>User Loading ...</div>
			)}
		</>
	);
}

export default TroopPanel;
