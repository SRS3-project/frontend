import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

import ContainerBox from "../ContainerBox/ContainerBox";
import AboutMeBanner from "./InfoBanners/AboutMeBanner";
import CastleBanner from "./InfoBanners/CastleBanner";
import OpponentBanner from "./InfoBanners/OpponentBanner";
import OverviewBanner from "./InfoBanners/OverviewBanner";
import TechBanner from "./InfoBanners/TechBanner";
import TroopBanner from "./InfoBanners/TroopBanner";
import styles from "./infobox.module.css";

const InfoBox = ({ info, filter }) => {
	
	const {auth} = useAuth();
	const {user} = useUser();

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
			case "about":
				return isAbout();
			default: 
				return isOverview();
		}
	};

	const isOverview = () => {
		return(
			(user?.username === auth.user) ? (
				<>
					<OverviewBanner />
				</>	
			) : null
		);
	}
	
	const isTech = () => {
		return(
			(info.type === "base" || info.type === "advanced" ||
			info.type === "movement" || info.type === "weapons") ?
			(
				<>
				{/*<br />
				<h3>Research Cost:</h3>
				<ul>
					<li>Food: {info.cost?.food}</li>
					<li>Gold: {info.cost?.gold}</li>
					<li>Minerals: {info.cost?.minerals}</li>
					<li>Wood: {info.cost?.wood}</li>
				</ul>					
				<TechBuilder item={info}/>
				*/}
				<TechBanner
					info={info}
				/>
				</> 
				
			) 
			: null);
	}

	const isTroop = () => {
		return(
			(info.type === "civilian" || info.type === "military") ?
			(
				<>
				{/* 	<br />
					<h3>Unit cost:</h3>
					<ul>
						<li>Food: {info.cost?.food}</li>
						<li>Gold: {info.cost?.gold}</li>
						<li>Minerals: {info.cost?.minerals}</li>
						<li>Wood: {info.cost?.wood}</li>
					</ul>					
					<TroopBuilder item={info}/> */}
				<TroopBanner
					info={info}
				/>
				</>
			) 
			: null
		);
	}

	const isCastle = () => {
		return(
			<CastleBanner />
		)
	}

	const isWorld = () => {
		return(
			(info.level >= 0) ? (
				<>
				{/* <h1>Username: {info.username}</h1>
				<br />
				<h2>Level: {info.level}</h2>
				<br />
				<h3>Coordinates:</h3>
				<ul>
					<li>X: {info.x}</li>
					<li>Y: {info.y}</li>
				</ul> */}
				<OpponentBanner
					info={info}
				/>
				</>	
			) : null
		);
	}

	const isAbout = () => {
		return(
			<AboutMeBanner />
		)
	}



	return (
			<>
				<ContainerBox>
					<h1>{info.name}</h1>
				</ContainerBox>
				<br />
				<ContainerBox>	
					<h4>{info.description}</h4>						
				</ContainerBox>
				{dataSelector()}		
			</>
	);
};

export default InfoBox;
