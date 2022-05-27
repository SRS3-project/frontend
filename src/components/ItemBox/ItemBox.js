import React from "react";
import styles from "./itembox.module.css";
import { useNavigate } from "react-router-dom";

function ItemBox(props) {
	return (
		<div className={styles.div} onClick={props.onClick}>
			{/* <button className={styles.topLabel} onClick={props.onClick}>{props.topLabel}</button> */}
			<label className={styles.topLabel}>{props.topLabel}</label>
			<img className={styles.img} src={props.image} />
			<label className={styles.bottomLabel}>{props.bottomLabel}</label>
		</div>
	);
}

export default ItemBox;
