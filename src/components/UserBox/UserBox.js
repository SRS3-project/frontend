import React from "react";
import styles from "./userbox.module.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import Button from "../Button/Button";
import RedirectButton from "../Button/RedirectButton/RedirectButton";

const UserBox = () => {
	const { auth } = useContext(AuthContext);

	const userName = auth?.user?.charAt(0).toUpperCase() + auth?.user?.slice(1);

	const navigate = useNavigate();
	const logout = useLogout();

	const signOut = async () => {
		await logout();
		navigate("/login");
	};

	return (
		<div className={styles.container}>
			<h1> Benvenuto: {userName} </h1>

			<Button label="Sign Out" onClick={signOut} />
			<br />
			<RedirectButton label="Delete account" path="/deleteAccount" />
		</div>
	);
};

export default UserBox;
