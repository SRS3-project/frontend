import LateralMenu from "./LateralMenu/LateralMenu";
import TechPanel from "./Panels/TechPanel";
import ResourcePanel from "./Panels/ResourcePanel";
import EmptyPanel from "./Panels/ContainerPanel";
import { Columns, Notification } from "react-bulma-components";
import Logo from "../images/logo.png";
import UserBox from "./UserBox/UserBox";
import Footer from "./Footer/Footer";
import TryHarder from "./TryHarder";

import { axiosUser } from "../api/axios";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";

import styles from "../index.css";
import InfoBox from "./InfoBox/InfoBox";
import ContainerPanel from "./Panels/ContainerPanel";
import Descriptions from "../locales/en.json";

const USERINFO_URL = "/player";

function Home() {
	const { auth } = useAuth();
	const { user, setUser } = useUser();
	const [info, setInfo] = useState(Descriptions.buildings.home);
	const [filter, setFilter] = useState('');
	const [world, setWorld] = useState();
	

	//setInfo(Descriptions.buildings.home);
	//console.log("info: ", info);

	const createUser = async () => {
		//console.log("creating user");
		try {
			const response = await axiosUser.post(
				USERINFO_URL,
				{ username: auth.user },
				{
					headers: {
						"Content-Type": "application/json",
						//new backend
						Authorization: `Bearer ${auth.accessToken}`,
						//old backend
						//Authorization: auth.accessToken,
					},
					withCredentials: true,
				}
			);
			//console.log("create ok");
			localStorage.setItem("user", JSON.stringify(response.data));
			setUser(response.data);
		} catch (err) {
			//console.log(err);
			if (!err?.response) {
				console.log("CREATE USER: No Server Response");
			} else if (err.response?.status === 401) {
				console.log("CREATE USER: Unauthorized");
			} else {
				console.log("CREATE USER: Unknown error");
			}
			//console.log("create errored");
			localStorage.setItem("user", "{}");
			setUser({});
		} finally {
			console.log("creationResponse: ", user);
		}
	};

	const updateUserInfo = async () => {
		//console.log("fetchingData");

		try {
			const requestUrl = `${USERINFO_URL}/${auth.user}`;
			//console.log("requestUrl: ", requestUrl);

			const response = await axiosUser.get(requestUrl, {
				headers: {
					"Content-Type": "application/json",
					//new backend
					Authorization: `Bearer ${auth.accessToken}`,
					//old backend
					//Authorization: auth.accessToken,
				},
				withCredentials: true,
			});

			console.log("response: ", response.data);
			localStorage.setItem("user", JSON.stringify(response.data));
			setUser(response.data);
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
			console.log("user: ", user);
		}
	};

	const requestWorld = async () => {
		
		console.log("requesting world");
				
		try {
			const response = await axiosUser.get(
				USERINFO_URL,
				{
					headers: {
						"Content-Type": "application/json",
						//new backend
						Authorization: `Bearer ${auth.accessToken}`,
						//old backend
						//Authorization: auth.accessToken,
					},
					withCredentials: true,
				}
			);
			console.log("world received");
			setWorld(response.data);
			console.log("world:  ", response.data);
		
		} catch (err) {
			
			//console.log(err);
			if (!err?.response) {
				console.log("FETCH WORLD DATA: No Server Response");
			} else if (err.response?.status === 401) {
				console.log("FETCH WORLD DATA: Unauthorized");
			} else {
				console.log("FETCH WORLD DATA: Unknown error");
			}
		} finally {
			//console.log("worldResponse: ", world);
		}
	};

	useEffect(() => {
		//return a new user if non existant or the existin user data
		createUser();
		//remove comment below for constant update
		setInterval(updateUserInfo, 30000);
	}, []);

	useEffect(() => {
		requestWorld();
	},[user])

	return (
		
		<>
			{/* {Object.keys(user).length === 0 ? ( */}
			{false ? (
				<TryHarder />
			) : (
				<Columns multiline centered>
					<Columns.Column size={3}>
						<img src={Logo} />
					</Columns.Column>
					<Columns.Column size={6}>
						<Notification color="link">
							<h1 className="gameName">diOgame</h1>
						</Notification>
						<Notification color="link">
							<ResourcePanel/>
						</Notification>
					</Columns.Column>
					<Columns.Column size={3}>
						<Notification color="link">
							<UserBox />
						</Notification>
					</Columns.Column>

					<Columns.Column size={4}>
						<Notification color="link">
							<LateralMenu
								setFilter={setFilter}
								setInfo={setInfo}
							/>
						</Notification>
					</Columns.Column>
					<Columns.Column size="auto">
						<Notification color="link">
							<InfoBox 
								info={info}
								filter={filter}
							/>
						</Notification>
						<br />
						<Notification color="link">
							<ContainerPanel
								filter={filter}
								setInfo={setInfo}
								scoreboard={world}
							/>
							{/* <TechPanel 
								techs={items}
								setInfo={setInfo}
								/> */}
						</Notification>
					</Columns.Column>

					{/* <Columns.Column>
						{TechPanel(Descriptions.technologies, setInfo)}
					</Columns.Column> */}

					<Columns.Column size={12}>
						<Notification color="link">
							<Footer />
						</Notification>
					</Columns.Column>
				</Columns>
			)}
		</>
	);
}

export default Home;
