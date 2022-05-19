import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";

//this should create the single tecnology button
function techInit(name, src, lvl) {
	let label = name;
	let img = src;
	let level = lvl;

	return (
		<span>
			<ItemBox
				topLabel={label}
				image={img}
				bottomLabel={level}
				onclick={() => console.log("Start Upgrade")}
			/>
		</span>
	);
}

//this should read the player tecnlogies tree
function techPopulate() {}

function TechPanel() {
	return (
		<>
			<div id="technologies">
				<div id="technologies_basic" className="columns">
					<div className="Column">
						<h3>Ricerche base</h3>
						{techInit("Ciao", "logo192.png", "2")}
						{techInit("Ciao", "logo192.png", "2")}
						<span>
							<ItemBox
								topLabel="Tette"
								image="confirm.png"
								bottomLabel="7"
								onclick={() => console.log("Start Upgrade")}
							/>
						</span>
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
