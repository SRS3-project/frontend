import React from "react";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import ItemBox from "../ItemBox/ItemBox";
import { Columns, Notification } from "react-bulma-components";
import styles from "./items.panels.css"


//this should read the player tecnlogies tree

function TechPanel( techs, setInfo ) {

	return (
		<>
			<Columns multiline centered className="technologies">
				<Columns.Column size={6} className="technologies_basic">
					<Notification color="link">
						<h3>Ricerche base</h3>
					</Notification>
					<ul id="horizontal-list">
					{
						techs.map((tech) => (tech.type === 'base' ? (
							<li key={tech.id}>
							<ItemBox 
								topLabel={tech.name}
								image="logo192.png"
								bottomLabel={tech.level}
								onClick={(e) => {
									e.preventDefault();
									setInfo(tech);
								}}
							/>
						</li>
							) : (null) 
							
						))
					}	
					</ul>
				</Columns.Column >
				<Columns.Column size={6} className="technologies_speed">
					<Notification color="link">
						<h3>Ricerche trasporto</h3>
					</Notification>
					<ul id="horizontal-list">
					{
						techs.map((tech) => (tech.type === 'movement' ? (
							<li key={tech.id}>
							<ItemBox 
								topLabel={tech.name}
								image="logo192.png"
								bottomLabel={tech.level}
								onClick={(e) => {
									e.preventDefault();
									setInfo(tech);
								}}
							/>
						</li>
							) : (null) 
							
						))
					}	
					</ul>
				</Columns.Column >

				<Columns.Column  size={6} className="technologies_advanced">
					<Notification color="link">
						<h3>Ricerche avanzate</h3>
					</Notification>
					<ul id="horizontal-list">
					{
						techs.map((tech) => (tech.type === 'advanced' ? (
							<li key={tech.id}>
							<ItemBox 
								topLabel={tech.name}
								image="logo192.png"
								bottomLabel={tech.level}
								onClick={(e) => {
									e.preventDefault();
									setInfo(tech);
								}}
							/>
						</li>
							) : (null) 
							
						))
					}	
					</ul>
				</Columns.Column >
				<Columns.Column size={6} id="technologies_combat">
					<Notification color="link">
						<h3>Ricerche militari</h3>
					</Notification>
					<ul id="horizontal-list">
					{
						techs.map((tech) => (tech.type === 'military' ? (
							<li key={tech.id}>
							<ItemBox 
								topLabel={tech.name}
								image="logo192.png"
								bottomLabel={tech.level}
								onClick={(e) => {
									e.preventDefault();
									setInfo(tech);
								}}
							/>
						</li>
							) : (null) 
							
						))
					}	
					</ul>
				</Columns.Column >
			</Columns>
		</>
	);
}

export default TechPanel;
