import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import { Columns, Notification } from "react-bulma-components";
import styles from "./items.panels.css";
import useUser from "../../hooks/useUser";
import en from "../../locales/en.json"
import TechBuilder from "../Builders/TechBuilder";
//this should read the player tecnlogies tree

const TECH_DEFINITIONS = en.technologies;

const TechPanel = ({setInfo}) => {
	
	const { user } = useUser();
	
	const tech_mock = user.techs.map((tech) => tech.type);
	console.log({tech_mock});



	const getTechLevel = (id) => {
		
		const lvl = user.techs?.find((el) => el.type == `${id.toUpperCase()}`).level;
		//console.log(`lvl: ${lvl} id: ${id.toUpperCase()}`);

		return lvl;
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
												e .preventDefault();
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
										image="logo192.png"
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
										image="logo192.png"
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
										topLabel={getTechLevel(tech.id)}
										image="logo192.png"
										bottomLabel={0}
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
		</>
	);
}

export default TechPanel;
