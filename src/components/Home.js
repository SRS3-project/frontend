import LateralMenu from "./LateralMenu/LateralMenu";
import TechPanel from "./ElementPanels/TechPanel";
import ResourcePanel from "./ElementPanels/ResourcePanel";
import { Columns, Notification } from "react-bulma-components";
import Logo from "../images/logo.png";
import UserBox from "./UserBox/UserBox";
import Footer from "./Footer/Footer";
import { UserProvider } from "../context/UserProvider";
import TryHarder from "./TryHarder";

import { axiosUser } from "../api/axios";
import { useEffect } from "react";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";

import styles from "../index.css";

const USERINFO_URL = "/player";

function Home() {
	const { auth } = useAuth();
	const { user, setUser } = useUser();

	const updateUserInfo = async () => {
		console.log("fetchingData");

		try {
			//old backend
			//const requestUrl = `/me`;
			//new backend
			//const requestUrl = `${USERINFO_URL}/${auth.user}`;
			const requestUrl = `${USERINFO_URL}`;
			console.log("requestUrl: ", requestUrl);

			const response = await axiosUser.get(requestUrl, {
				headers: {
					"Content-Type": "application/json",
					//new backend
					Authorization: `Bearer=${auth.accessToken}`,
					//Cookie: `X-AUTH-TOKEN=${auth.accessToken}`,
					//old backend
					//Authorization: auth.accessToken,

					//Cookie: `X-AUTH-TOKEN=${auth.accessToken}`,
				},
				withCredentials: true,
			});
			console.log("response: ", response);

			//response.data.player is for the old backend
			//console.log(typeof response.data.player, " ", response.data.player);
			localStorage.setItem("user", JSON.stringify(response.data.player));

			setUser(response.data.player);
		} catch (err) {
			//console.log(err);
			if (!err?.response) {
				console.log("FETCH USER DATA: No Server Response");
			} else if (err.response?.status === 401) {
				console.log("FETCH USER DATA: Unauthorized");
			} else {
				console.log("FETCH USER DATA: Unknown error");
			}
		} finally {
			//console.log("user: ", user);
		}
	};

	useEffect(() => {
		updateUserInfo();
		//remove comment below for constant update
		//setInterval(updateUserInfo, 30000);
	}, []);

	return (
		<>
			{Object.keys(user).length === 0 ? (
				<TryHarder />
			) : (
				/* <UserProvider> */
				<Columns multiline centered>
					<Columns.Column size={3}>
						<img src={Logo} />
					</Columns.Column>
					<Columns.Column size={6}>
						<Notification color="link">
							<h1 className="gameName">diOgame</h1>
						</Notification>
						<Notification color="link">
							<ResourcePanel />
						</Notification>
					</Columns.Column>
					<Columns.Column size={3}>
						<Notification color="link">
							<UserBox />
						</Notification>
					</Columns.Column>

					<Columns.Column size={4}>
						<Notification color="link">
							<LateralMenu />
						</Notification>
					</Columns.Column>
					<Columns.Column size="auto">
						<Notification color="link">
							<h1>Home</h1>
							<p>You are logged in!</p>
						</Notification>
						<br />
						<Notification color="link">
							<TechPanel />
						</Notification>
					</Columns.Column>

					<Columns.Column size={12}>
						<Notification color="link">
							<Footer />
						</Notification>
					</Columns.Column>
				</Columns>
				/* </UserProvider> */
			)}
		</>
	);
}

export default Home;
