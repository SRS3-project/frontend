import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

import axios from "../api/axios";

const CONFIRMEMAIL_URL = "/confirmemail";

const ConfirmEmail = () => {
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	const sendMail = async () => {
		// if button enabled with JS hack
		try {
			console.log(token);
			const response = await axios.get(
				CONFIRMEMAIL_URL,
				{ params: { token: token } },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 401) {
				setErrMsg("No token sended");
			} else {
				setErrMsg("Confirmation Failed");
			}
		}
	};

	useEffect(() => {
		sendMail();
	}, []);

	return (
		<>
			{success ? (
				<section>
					<h1>Success! Email confirmed.</h1>
					<br />
					<p>
						<Link to="/login">Login Page</Link>
					</p>
				</section>
			) : (
				<section>
					<h1>Something went wrong, retray in a minute.</h1>
					<br />
					<p>{errMsg}</p>
					<br />
					<p>
						Wanna go back?
						<br />
						<Link to="/login">Login Page</Link>
					</p>
				</section>
			)}
		</>
	);
};

export default ConfirmEmail;
