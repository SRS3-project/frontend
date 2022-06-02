import React from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const USERINFO_URL = "/player";

const World = () => {
	const { auth } = useAuth();
	const { user } = useUser();
	const [success, setSuccess] = useState(false);
	const [world, setWorld] = useState();

	const requestWorld = async () => {
		console.log("requesting world");
		try {
			const response = await axiosUser.get(
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
			console.log("world received");
			setWorld(response.data);
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
			console.log("worldResponse: ", world);
		}
	};

	return <div>world</div>;
};

export default World;
