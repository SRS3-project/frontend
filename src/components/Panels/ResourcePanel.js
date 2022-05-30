import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import ContainerBox from "../ContainerBox/ContainerBox";

import minerals from "../../images/mineral-icon.png";
import mineral from "../../images/mineral-icon.png";
import wood from "../../images/wood-icon.png";
import gold from "../../images/gold-icon.png";
import food from "../../images/food-icon.png";

import useUser from "../../hooks/useUser";

const resources = [
	{ image: food, name: "FOOD" },
	{ image: gold, name: "GOLD" },
	{ image: minerals, name: "MINERALS" },
	{ image: wood, name: "WOOD" },
];

const ResourcePanel = () => {
	const { user } = useUser();
	return (
		<>
			<ContainerBox>
				{resources.map((resource, i) => {
					const label =
						resource.name.charAt(0) +
						resource.name.slice(1).toLowerCase();
					//console.log(Object.keys(user));
					return (
						<li key={resource.name}>
							<ItemBox
								topLabel={label}
								image={resource.image}
								bottomLabel={
									Object.keys(user).length !== 0
										? user.resources[i].amount
										: "0"
								}
							/>
						</li>
					);
				})}
			</ContainerBox>
		</>
	);
};

export default ResourcePanel;
