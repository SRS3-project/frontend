import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import ContainerBox from "../ContainerBox/ContainerBox";

import minerals from "../../images/resources/mineral-icon.png";
import wood from "../../images/resources/wood-icon.png";
import gold from "../../images/resources/gold-icon.png";
import food from "../../images/resources/food-icon.png";

import useUser from "../../hooks/useUser";

const resources = [
	{ image: food, name: "FOOD", rate: 10 },
	{ image: gold, name: "GOLD", rate: 15 },
	{ image: minerals, name: "MINERALS", rate: 30 },
	{ image: wood, name: "WOOD", rate: 20 },
];

const ResourcePanel = () => {
	const { user } = useUser();

	const isValid = (arg) => {
		return (
			arg !== null &&
			arg !== "" &&
			arg !== undefined &&
			Object.keys(arg).length !== 0
		);
	}

	const setLabel = (resource) => {
		return resource.name.charAt(0) + resource.name.slice(1).toLowerCase();
	};

	return (
		<>
			<ContainerBox>
				{resources.map((resource, i) => (
					<li key={resource.name}>
						<ItemBox
							topLabel={setLabel(resource)}
							image={resource.image}
							bottomLabel={
								isValid(user) ? user.resources[i].amount : "0"
							}
						/>
						<p>
							{isValid(user)
								? Math.floor(
										resource.rate *
											user.level *
											Math.pow(1.1, user.level).toFixed(2)
								  )
								: 0}
							/h
						</p>
					</li>
				))}
			</ContainerBox>
		</>
	);
};

export default ResourcePanel;
