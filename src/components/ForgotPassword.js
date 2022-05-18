import {
	faCheck,
	faTimes,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button/Button";

import axios from "../api/axios";
const FORGOTPASSWORD_URL = "/forgotpassword";

const MAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ForgotPassword = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const mailRef = useRef();
	const errRef = useRef();

	const [mail, setMail] = useState("");
	const [validMail, setValidMail] = useState(false);
	const [mailFocus, setMailFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		mailRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [mail]);

	useEffect(() => {
		setValidMail(MAIL_REGEX.test(mail));
	}, [mail]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				FORGOTPASSWORD_URL,
				{ email: mail },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			console.log(JSON.stringify(response?.data));
			//console.log(JSON.stringify(response));
			setMail("");
			navigate(from, { replace: true });
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Invalid Input");
			} else {
				setErrMsg("Unknown Error");
			}
			errRef.current?.focus();
		}
	};

	return (
		<section>
			<h1>Forgot Password</h1>
			<p>
				{" "}
				If the mail is present inside our database you will receive a
				link to reset your password.
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">
					Email:
					<FontAwesomeIcon
						icon={faCheck}
						className={validMail ? "valid" : "hide"}
					/>
					<FontAwesomeIcon
						icon={faTimes}
						className={validMail || !mail ? "hide" : "invalid"}
					/>
				</label>
				<input
					type="text"
					id="mail"
					ref={mailRef}
					autoComplete="off"
					onChange={(e) => setMail(e.target.value)}
					value={mail}
					required
					aria-invalid={validMail ? "false" : "true"}
					aria-describedby="uidnote"
					onFocus={() => setMailFocus(true)}
					onBlur={() => setMailFocus(false)}
				/>
				<p
					id="uidnote"
					className={
						mailFocus && mail && !validMail
							? "instructions"
							: "offscreen"
					}
				>
					<FontAwesomeIcon icon={faInfoCircle} />
					Something is wrong in your mail.
					<br />
				</p>
				<br />
				<Button
					label="Send email"
					disabled={!validMail ? true : false}
				/>
			</form>
			<p>
				Go back to login
				<br />
				<span className="line">
					<Link to="/login">Login Page</Link>
				</span>
			</p>
		</section>
	);
};

export default ForgotPassword;
