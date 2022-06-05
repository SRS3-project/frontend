import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import ContainerBox from "../ContainerBox/ContainerBox";
import { Columns, Notification } from "react-bulma-components";
import StructureBuilder from "../Builders/StructureBuilder";

import useUser from "../../hooks/useUser";
import { IsValid } from "../../utils/checkParams";
import en from "../../locales/en.json"

import farms from "../../images/logo192.png";
import foundries from "../../images/logo192.png";
import mines from "../../images/logo192.png";
import carpentries from "../../images/logo192.png";

const structures = [
	{ image: farms, name: "FARMS" },
	{ image: foundries, name: "FOUNDRIES" },
	{ image: mines, name: "MINES" },
	{ image: carpentries, name: "CARPENTRIES" }
];

const STRUCT_DEFINITION = en.structures;

const StructuresPanel = ({setInfo}) => {
	const { user } = useUser();

	//const tech_mock = user.techs.map((tech) => tech.type);
	//console.log({ tech_mock });

	const getStructLevel = (id) => {
		const lvl = user.structures?.find(
			(el) => el.type == `${id.toUpperCase()}`
		).level;
		//console.log(`lvl: ${lvl} id: ${id.toUpperCase()}`);

		return lvl;
	};

	const getImage = (id) => {
		const image = structures.find((el) => el.name === id.toUpperCase()).image;
		return image;
	};

	return (
		<>
			{IsValid(user) ? (
				<Columns multiline centered className="technologies">
				<Columns.Column size={6} className="technologies_basic">
					<Notification color="link">
						<h3>Resource Structures</h3>
					</Notification>
					<ul id="horizontal-list">
						{STRUCT_DEFINITION.map((structure) =>
							structure.type === "production" ? (
								<li key={structure.id}>
									<ItemBox
										topLabel={structure.name}
										image={getImage(structure.id)}
										bottomLabel={getStructLevel(structure.id)}
										onClick={(e) => {
											e.preventDefault();
											setInfo(structure);
										}}
									/>
									<StructureBuilder item={structure} />
								</li>
							) : null
						)}
					</ul>
				</Columns.Column>
				<Columns.Column size={6} className="technologies_speed">
					<Notification color="link">
						<h3>General Structures</h3>
					</Notification>
					{/* <ul id="horizontal-list">
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
					</ul> */}
                    <div>Coming Soon... Maybe... One Day... BOH!</div>
				</Columns.Column>
			</Columns>
			) : (
				<div>User Loading ...</div>
			)}
		</>
	);
}

export default StructuresPanel;