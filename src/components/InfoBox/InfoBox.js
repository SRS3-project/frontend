import React, { useEffect } from "react";
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
			case "troops":
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
				<br />
				<h3>Research Cost:</h3>
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
				<br />
				<h3>Unit cost:</h3>
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
		return(
			(info.level >= 0) ? (
				<>
				<h1>Username: {info.username}</h1>
				<br />
				<h2>Level: {info.level}</h2>
				<br />
				<h3>Coordinates:</h3>
				<ul>
					<li>X: {info.x}</li>
					<li>Y: {info.y}</li>
				</ul>
				</>	
			) : null
		);
	}

	return (
			<>
				<h1>{info.name}</h1>
				<br />
				<h2>{info.description}</h2>
				{dataSelector()}		
			</>
	);
};

export default InfoBox;
