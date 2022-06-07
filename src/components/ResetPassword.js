import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Button from "./Button/Button";

import {
	faCheck,
	faTimes,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "../api/axios";
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const RESETPASSWORD_URL = "/forgotpassword";

const ResetPassword = (props) => {
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");

	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [mail, setMail] = useState("");
	const [validMail, setValidMail] = useState(false);
	const [mailFocus, setMailFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	const errRef = useRef();
	const mailRef = useRef();

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
		setValidMail(MAIL_REGEX.test(mail));
	}, [pwd, matchPwd, mail]);

	useEffect(() => {
		setErrMsg("");
	}, [pwd, matchPwd, mail]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = PWD_REGEX.test(pwd);
		if (!v1) {
			setErrMsg("Invalid Entry");
			return;
		}
		try {
			const response = await axios.put(
				RESETPASSWORD_URL,
				{ newPassword: pwd, token: token, email: mail },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			// TODO: remove console.logs before deployment
			//console.log(JSON.stringify(response?.data));
			//console.log(JSON.stringify(response))
			setSuccess(true);
			//clear state and controlled inputs
			setMail("");
			setPwd("");
			setMatchPwd("");
			console.log(response);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else {
				setErrMsg(err?.response?.data?.message);
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<Link to="/login">Login Page</Link>
					</p>
				</section>
			) : (
				<section>
					<p
						ref={errRef}
						className={errMsg ? "errmsg" : "offscreen"}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Reset Password</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="email">
							Email:
							<FontAwesomeIcon
								icon={faCheck}
								className={validMail ? "valid" : "hide"}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validMail || !mail ? "hide" : "invalid"
								}
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
						<label htmlFor="password">
							Password:
							<FontAwesomeIcon
								icon={faCheck}
								className={validPwd ? "valid" : "hide"}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validPwd || !pwd ? "hide" : "invalid"
								}
							/>
						</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
							aria-invalid={validPwd ? "false" : "true"}
							aria-describedby="pwdnote"
							onFocus={() => setPwdFocus(true)}
							onBlur={() => setPwdFocus(false)}
						/>
						<p
							id="pwdnote"
							className={
								pwdFocus && !validPwd
									? "instructions"
									: "offscreen"
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a
							number and a special character.
							<br />
							Allowed special characters:{" "}
							<span aria-label="exclamation mark">!</span>{" "}
							<span aria-label="at symbol">@</span>{" "}
							<span aria-label="hashtag">#</span>{" "}
							<span aria-label="dollar sign">$</span>{" "}
							<span aria-label="percent">%</span>
						</p>

						<label htmlFor="confirm_pwd">
							Confirm Password:
							<FontAwesomeIcon
								icon={faCheck}
								className={
									validMatch && matchPwd ? "valid" : "hide"
								}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validMatch || !matchPwd ? "hide" : "invalid"
								}
							/>
						</label>
						<input
							type="password"
							id="confirm_pwd"
							onChange={(e) => setMatchPwd(e.target.value)}
							value={matchPwd}
							required
							aria-invalid={validMatch ? "false" : "true"}
							aria-describedby="confirmnote"
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<p
							id="confirmnote"
							className={
								matchFocus && !validMatch
									? "instructions"
									: "offscreen"
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must match the first password input field.
						</p>
						<br />
						<Button
							label="Reset Password"
							disabled={
								!validPwd || !validMatch || !validMail
									? true
									: false
							}
						/>
					</form>
				</section>
			)}
		</>
	);
};

export default ResetPassword;
