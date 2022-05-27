import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import ContainerBox from "../ContainerBox/ContainerBox";

import mineral from "../../images/mineral-icon.png";
import wood from "../../images/wood-icon.png";
import gold from "../../images/gold-icon.png";
import food from "../../images/food-icon.png";

const ResourcePanel = ({ resources }) => {
	return (
		<>
			<ContainerBox>
				{/*
            user.materials.map(material => {
                <ItemBox topLabel="material.name" image={material.name} bottomLabel="material.quantity"/>
            }) 
            */}
				<ItemBox
					topLabel="Minerals"
					image={mineral}
					bottomLabel={resources.mineral}
				/>
				<ItemBox 
					topLabel="Wood" 
					image={wood} 
					bottomLabel={resources.wood} 
				/>
				<ItemBox 
					topLabel="Gold" 
					image={gold} 
					bottomLabel={resources.gold}
				/>
				<ItemBox 
					topLabel="Food" 
					image={food} 
					bottomLabel={resources.food}
				/>
			</ContainerBox>
		</>
	);
}

export default ResourcePanel;
