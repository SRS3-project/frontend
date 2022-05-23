import React from "react";
import styles from "./infobox.module.css";

const InfoBox = ({ info }) => {
	return (
		<div /* className={styles.container} */>
			<h1> Infobox: {info.name} </h1>
			<p>{info.description}</p>
		</div>
	);
};

export default InfoBox;
