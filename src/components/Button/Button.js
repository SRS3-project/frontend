import React from "react";
import styles from "./button.module.css";

function Button(props) {
	return (
		<button
			className={styles.button}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.label}
		</button>
	);
}

export default Button;
