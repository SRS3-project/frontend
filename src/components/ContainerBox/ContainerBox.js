import React from "react";
import styles from "./containerbox.module.css";

function ContainerBox(props) {
	return <div className={styles.container}>{props.children}</div>;
}

export default ContainerBox;
