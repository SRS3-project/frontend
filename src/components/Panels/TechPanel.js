import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import { Columns, Notification } from "react-bulma-components";
import styles from "./items.panels.css";
import useUser from "../../hooks/useUser";
import en from "../../locales/en.json"
//this should read the player tecnlogies tree

const TECH_DEFINITIONS = en.technologies;

function TechPanel(setInfo) {
	
	const { user } = useUser();
	
	const tech_mock = user.techs.map((tech) => tech.type);
	console.log({tech_mock});

	const getTechLevel = (id) => {
		return user.techs[tech_mock.indexOf(id.toUpperCase())].level;
	}

	return (
		<>
			<Columns multiline centered className="technologies">
				<Columns.Column size={6} className="technologies_basic">
					<Notification color="link">
						<h3>Ricerche base</h3>
					</Notification>
					<ul id="horizontal-list">
						{TECH_DEFINITIONS.map((tech) =>
							tech.type === "base" ? 
								(
									<li key={tech.id}>
										<ItemBox
											topLabel={tech.name}
											image="logo192.png"
											bottomLabel={getTechLevel(tech.id)}
											onClick={(e) => {
												e.preventDefault();
												setInfo(tech);
											}}
										/>
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
										image="logo192.png"
										bottomLabel={getTechLevel(tech.id)}
										onClick={(e) => {
											e.preventDefault();
											setInfo(tech);
										}}
									/>
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
										image="logo192.png"
										bottomLabel={getTechLevel(tech.id)}
										onClick={(e) => {
											e.preventDefault();
											setInfo(tech);
										}}
									/>
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
							tech.type === "military" ? (
								<li key={tech.id}>
									<ItemBox
										topLabel={getTechLevel(tech.id)}
										image="logo192.png"
										bottomLabel={0}
										onClick={(e) => {
											e.preventDefault();
											setInfo(tech);
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

export default TechPanel;
