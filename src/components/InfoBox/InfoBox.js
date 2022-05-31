import React from "react";
import TechBuilder from "../Builders/TechBuilder";
import TroopBuilder from "../Builders/TroopBuilder";
import styles from "./infobox.module.css";

const InfoBox = ({ info }) => {
	
	const isTech = () => {
		return(
			(info.type === "base" || info.type === "advanced" ||
			info.type === "movement" || info.type === "weapons") ?
			(
				<>
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
			: null);
	}
	
	return (
			<>
				<div /* className={styles.container} */>
					<h1> Infobox: {info.name} </h1>
					<br />
					<p>{info.description}</p>
					<br />					
				</div>
				{isTech()}
				{isTroop()}
			</>
	);
};

export default InfoBox;
