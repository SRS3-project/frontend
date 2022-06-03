import React from "react";
import styles from "./footer.module.css";

const Footer = ({ setFilter }) => {
	return (
		<footer className={styles.footer}>
			<p className={styles.item}>Copyright&copy; 2022</p>
			{/* <p className={styles.item} >About me</p> */}
			<p className={styles.item}>
				<a
					className={styles.rickroll}
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				>
					This is a rickroll
				</a>
			</p>
		</footer>
	);
};

export default Footer;
