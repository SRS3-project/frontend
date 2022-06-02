import React from "react";
import TechBuilder from "../Builders/TechBuilder";
import TroopBuilder from "../Builders/TroopBuilder";
import styles from "./infobox.module.css";

const InfoBox = ({ info, filter }) => {
	
	const dataSelector = () => {
		switch (filter) {
			case "castle":
				return isCastle();
			case "barracs":
				return isTroop();
			case "tower":
				return isTech();
			case "troop":
				return isTroop();
			case "world":
				return isWorld();
			default: {}
		}
	};
	
	const isTech = () => {
		return(
			(info.type === "base" || info.type === "advanced" ||
			info.type === "movement" || info.type === "weapons") ?
			(
				<>
				<h1> Infobox: {info.name} </h1>
				<br />
				<p>{info.description}</p>
				<br />
				<h3>Costo unita':</h3>
				<ul>
					<li>Food: {info.cost?.food}</li>
					<li>Gold: {info.cost?.gold}</li>
					<li>Minerals: {info.cost?.minerals}</li>
					<li>Wood: {info.cost?.wood}</li>
				</ul>					
				<TechBuilder item={info}/>
				</>
			) 
			: null);
	}

	const isTroop = () => {
		return(
			(info.type === "civilian" || info.type === "military") ?
			(
				<>
				<h1> Infobox: {info.name} </h1>
				<br />
				<p>{info.description}</p>
				<br />
				<h3>Costo unita':</h3>
				<ul>
					<li>Food: {info.cost?.food}</li>
					<li>Gold: {info.cost?.gold}</li>
					<li>Minerals: {info.cost?.minerals}</li>
					<li>Wood: {info.cost?.wood}</li>
				</ul>					
				<TroopBuilder item={info}/>
				</>
			) 
			: null
		);
	}

	const isCastle = () => {
		return null;
	}

	const isWorld = () => {
		return;
	}
	
	return (
			<>
				{dataSelector()}
			</>
	);
};

export default InfoBox;
