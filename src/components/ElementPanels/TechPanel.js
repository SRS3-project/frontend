import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";



//this should read the player tecnlogies tree

const TechPanel = ({ techs, setInfo} ) => {

	let techInit = () => {

		techs.filter((item) => item.type.include('base')).map(filteredType => (
			<span>
					<ItemBox
						topLabel={filteredType.name}
						image="logo192.png"
						bottomLabel={filteredType.level}
						onclick={(e) => {
							e.preventDefault();
							setInfo(filteredType.description);
						}}
									/>
				</span>
		))}

	return (
		<>
			<div id="technologies">
				<div id="technologies_basic" className="columns">
					<div className="Column">
						<h3>Ricerche base</h3>
						{/* {techs.map((tech) => (
								<div>{tech.name}</div>
							))} */
							/* () => techInit() */
						}
						
					</div>
				</div>
				<div id="technologies_speed">
					<h3>Ricerche trasporto</h3>
					<ul className="icons"></ul>
				</div>
				<div id="technologies_advanced">
					<h3>Ricerche avanzate</h3>
					<ul className="icons"></ul>
				</div>
				<div id="technologies_combat">
					<h3>Ricerche militari</h3>
					<ul className="icons"></ul>
				</div>
			</div>
		</>
	);
}

export default TechPanel;
