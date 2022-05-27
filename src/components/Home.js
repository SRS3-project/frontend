import LateralMenu from "./LateralMenu/LateralMenu";
import TechPanel from "./ElementPanels/TechPanel";
import ResourcePanel from "./ElementPanels/ResourcePanel";
import EmptyPanel from "./ElementPanels/EmptyPanel";
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

import Descriptions from "../locales/en.json";

const USERINFO_URL = "/player";

function Home() {
	const { auth } = useAuth();
	const { user, setUser } = useUser();
	const [info, setInfo] = useState(Descriptions.buildings.home);
	const [items, setItems] = useState(Descriptions.technologies);
	const [elements, setElements] = useState([]);

	//mock list for resources
	let mock_resources = {
		mineral:10000,
		wood: 7500,
		gold: 5000,
		food:2500
	}

	//setInfo(Descriptions.buildings.home);
	//console.log("info: ", info);

	const updateUserInfo = async () => {
		console.log("fetchingData");

		try {
			//old backend
			//const requestUrl = `/me`;
			//new backend
			const requestUrl = `${USERINFO_URL}/${auth.user}`;
			console.log("requestUrl: ", requestUrl);
			
			const response = await axiosUser.post(requestUrl, {
				headers: {
					"Content-Type": "application/json",
					//new backend
					Authorization: `Bearer ${auth.accessToken}`,
					//old backend
					//Authorization: auth.accessToken,
				},				
				body: {
					username: `${auth.user}`,
				},
				withCredentials: true,
			})
			
			if(!response.ok)
			{
				response = await axiosUser.get(requestUrl, {
					headers: {
						"Content-Type": "application/json",
						//new backend
						Authorization: `Bearer ${auth.accessToken}`,
						//old backend
						//Authorization: auth.accessToken,
					},
					withCredentials: true,
				});
				
				//console.log("response: ", response.data);
	
				//response.data.player is for the old backend
				//console.log(typeof response.data.player, " ", response.data.player);
				localStorage.setItem("user", JSON.stringify(response.data));
	
				setUser(response.data);
			}
			
			
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

	useEffect(() => {
		updateUserInfo();
		//remove comment below for constant update
		//setInterval(updateUserInfo, 30000);
	}, []);

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
							<ResourcePanel 
								resources={mock_resources}
							/>
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
								descriptions={Descriptions}
								setInfo={setInfo}
								setItems={setItems}
								setElements={setElements}
							/>
						</Notification>
					</Columns.Column>
					<Columns.Column size="auto">
						<Notification color="link">
							<InfoBox info={info} />
						</Notification>
						<br />
						<Notification color="link">
							<EmptyPanel 
								element={elements}
							/>
							{/* <TechPanel 
								techs={items}
								setInfo={setInfo}
								/> */}
						</Notification>
					</Columns.Column>

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
