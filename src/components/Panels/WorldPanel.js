import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import { axiosUser } from "../../api/axios";

const USERINFO_URL = "/player";

function WorldPanel(setInfo) {
	const { auth } = useAuth();
	const [success, setSuccess] = useState(false);
	const [world, setWorld] = useState();

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
			
			//console.log("world:  ", response);
		
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
		requestWorld(); 
	}, []);

	return(
		<h1>This World is your to conquer</h1>
	);
};

export default WorldPanel;