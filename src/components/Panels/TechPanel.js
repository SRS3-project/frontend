import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import { Columns, Notification } from "react-bulma-components";
import styles from "./items.panels.css";
import useUser from "../../hooks/useUser";
import en from "../../locales/en.json";
import TechBuilder from "../Builders/TechBuilder";
//this should read the player tecnlogies tree

import picks from "../../images/technologies/base/picks.png";
import axes from "../../images/technologies/base/axes.png";
import crucible from "../../images/technologies/base/crucible.png";
import storage from "../../images/technologies/base/storage.png";

import eagles from "../../images/technologies/movement/eagles.png";
import mounts from "../../images/technologies/movement/mounts.png";
import spaceandtime from "../../images/technologies/movement/spaceandtime.png";
import wagons from "../../images/technologies/movement/wagons.png";

import espionage from "../../images/technologies/advanced/espionage.png";
import exploration from "../../images/technologies/advanced/exploration.png";
import logistic from "../../images/technologies/advanced/logistic.png";
import strategy from "../../images/technologies/advanced/strategy.png";
import tartarus from "../../images/technologies/advanced/tartarus.png";

import armors from "../../images/technologies/weapons/armors.png";
import weapons from "../../images/technologies/weapons/weapons.png";
import arcanomancy from "../../images/technologies/weapons/arcanomancy.png";
import { IsValid } from "../../utils/checkParams";

const TECH_DEFINITIONS = en.technologies;
	
const techs = [
	{ image: arcanomancy, name: "ARCANOMANCY" },
	{ image: armors, name: "ARMORS" },
	{ image: axes, name: "AXES" },
	{ image: crucible, name: "CRUCIBLE" },
	{ image: eagles, name: "EAGLES" },
	{ image: espionage, name: "ESPIONAGE" },
	{ image: exploration, name: "EXPLORATION" },
	{ image: logistic, name: "LOGISTIC" },
	{ image: mounts, name: "MOUNTS" },
	{ image: picks, name: "PICKS" },
	{ image: spaceandtime, name: "SPACEANDTIME" },
	{ image: storage, name: "STORAGE" },
	{ image: strategy, name: "STRATEGY" },
	{ image: tartarus, name: "TARTARUS" },
	{ image: wagons, name: "WAGONS" },
	{ image: weapons, name: "WEAPONS" },
];

const TechPanel = ({setInfo}) => {
	const { user } = useUser();

	//const tech_mock = user.techs.map((tech) => tech.type);
	//console.log({ tech_mock });

	const getTechLevel = (id) => {
		const lvl = user.techs?.find(
			(el) => el.type == `${id.toUpperCase()}`
		).level;
		//console.log(`lvl: ${lvl} id: ${id.toUpperCase()}`);

		return lvl;
	};

	const getImage = (id) => {
		const image = techs.find((el) => el.name === id.toUpperCase()).image;
		return image;
	};

	return (
		<>
			{IsValid(user) ? (
				<Columns multiline centered className="technologies">
				<Columns.Column size={6} className="technologies_basic">
					<Notification color="link">
						<h3>Ricerche base</h3>
					</Notification>
					<ul id="horizontal-list">
						{TECH_DEFINITIONS.map((tech) =>
							tech.type === "base" ? (
								<li key={tech.id}>
									<ItemBox
										topLabel={tech.name}
										image={getImage(tech.id)}
										bottomLabel={getTechLevel(tech.id)}
										onClick={(e) => {
											e.preventDefault();
											setInfo(tech);
										}}
									/>
									<TechBuilder item={tech} />
								</li>
							) : null
						)}
					</ul>
				</Columns.Column>
				<Columns.Column size={6} className="technologies_speed">
					<Notification color="link">
						<h3>Ricerche trasporto</h3>
					</Notification>
					<ul id="horizontal-list">
						{TECH_DEFINITIONS.map((tech) =>
							tech.type === "movement" ? (
								<li key={tech.id}>
									<ItemBox
										topLabel={tech.name}
										image={getImage(tech.id)}
										bottomLabel={getTechLevel(tech.id)}
										onClick={(e) => {
											e.preventDefault();
											setInfo(tech);
										}}
									/>
									<TechBuilder item={tech} />
								</li>
							) : null
						)}
					</ul>
				</Columns.Column>

				<Columns.Column size={6} className="technologies_advanced">
					<Notification color="link">
						<h3>Ricerche avanzate</h3>
					</Notification>
					<ul id="horizontal-list">
						{TECH_DEFINITIONS.map((tech) =>
							tech.type === "advanced" ? (
								<li key={tech.id}>
									<ItemBox
										topLabel={tech.name}
										image={getImage(tech.id)}
										bottomLabel={getTechLevel(tech.id)}
										onClick={(e) => {
											e.preventDefault();
											setInfo(tech);
										}}
									/>
									<TechBuilder item={tech} />
								</li>
							) : null
						)}
					</ul>
				</Columns.Column>
				<Columns.Column size={6} id="technologies_combat">
					<Notification color="link">
						<h3>Ricerche militari</h3>
					</Notification>
					<ul id="horizontal-list">
						{TECH_DEFINITIONS.map((tech) =>
							tech.type === "weapons" ? (
								<li key={tech.id}>
									<ItemBox
										topLabel={tech.name}
										image={getImage(tech.id)}
										bottomLabel={getTechLevel(tech.id)}
										onClick={(e) => {
											e.preventDefault();
											setInfo(tech);
										}}
									/>
									<TechBuilder item={tech} />
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

export default TechPanel;
