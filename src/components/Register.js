import { useRef, useState, useEffect } from "react";
import {
	faCheck,
	faTimes,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

import ReCAPTCHA from "react-google-recaptcha";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const REGISTER_URL = "/register";
const CAPTCHA_URL = "/checkRecaptcha";
const CAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY;

const Register = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [mail, setMail] = useState("");
	const [validMail, setValidMail] = useState(false);
	const [mailFocus, setMailFocus] = useState(false);

	const [matchMail, setMatchMail] = useState("");
	const [validMailMatch, setValidMailMatch] = useState(false);
	const [matchMailFocus, setMatchMailFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	const [recaptchaSuccess, setRecaptchaSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setValidName(USER_REGEX.test(user));
	}, [user]);

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setValidMail(MAIL_REGEX.test(mail));
		setValidMailMatch(mail === matchMail);
	}, [mail, matchMail]);

	/* useEffect(() => {
		if (!recaptchaSuccess) setErrMsg("Captcha failed");
		console.log("set err captcha");
	}, [recaptchaSuccess]); */

	useEffect(() => {
		setErrMsg("");
	}, [user, pwd, matchPwd, mail, matchMail, recaptchaSuccess]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USER_REGEX.test(user);
		const v2 = PWD_REGEX.test(pwd);
		const v3 = MAIL_REGEX.test(mail);
		if (!v1 || !v2 || !v3) {
			setErrMsg("Invalid Entry");
			return;
		}
		try {
			const response = await axios.post(
				REGISTER_URL,
				{ username: user, password: pwd, email: mail },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			// TODO: remove console.logs before deployment
			console.log(response);
			//console.log(JSON.stringify(response?.data));
			//console.log(JSON.stringify(response))
			setSuccess(true);
			//clear state and controlled inputs
			setUser("");
			setPwd("");
			setMatchPwd("");
			setMail("");
			setMatchMail("");
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} /*else if (err.response?.status === 400) {
				setErrMsg("Invalid Input");
			} else if (err.response?.status === 409) {
				setErrMsg("Username or Email alerady Taken");
			} */ else {
				setErrMsg(err?.response?.data?.message);
			}
			errRef.current.focus();
		}
	};

	const onRecaptchaChenge = async (value) => {
		console.log("captcha value: ", value);

		try {
			const response = await axios.post(
				CAPTCHA_URL,
				{ captcha: value },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			//console.log("response: ", response.data);
			setRecaptchaSuccess(response.data.success);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else {
				setErrMsg("Captcha failed");
			}
			errRef.current.focus();
		} finally {
			if (!recaptchaSuccess) setErrMsg("Captcha failed");
		}
	};

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<Link to="/login">Sign in</Link>
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
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">
							Username:
							<FontAwesomeIcon
								icon={faCheck}
								className={validName ? "valid" : "hide"}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validName || !user ? "hide" : "invalid"
								}
							/>
						</label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
							aria-invalid={validName ? "false" : "true"}
							aria-describedby="uidnote"
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p
							id="uidnote"
							className={
								userFocus && user && !validName
									? "instructions"
									: "offscreen"
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							4 to 24 characters.
							<br />
							Must begin with a letter.
							<br />
							Letters, numbers, underscores, hyphens allowed.
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
							id="email"
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
						<label htmlFor="confirm_email">
							Confirm Email:
							<FontAwesomeIcon
								icon={faCheck}
								className={
									validMailMatch && matchMail
										? "valid"
										: "hide"
								}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validMailMatch || !matchMail
										? "hide"
										: "invalid"
								}
							/>
						</label>
						<input
							type="text"
							id="confirm_email"
							autoComplete="off"
							onChange={(e) => setMatchMail(e.target.value)}
							value={matchMail}
							required
							aria-invalid={validMail ? "false" : "true"}
							aria-describedby="uidnote"
							onFocus={() => setMatchMailFocus(true)}
							onBlur={() => setMatchMailFocus(false)}
						/>
						<p
							id="confirmnote"
							className={
								matchMailFocus && !validMailMatch
									? "instructions"
									: "offscreen"
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must match the first email input field.
						</p>
						<br />
						<ReCAPTCHA
							sitekey={CAPTCHA_KEY}
							onChange={onRecaptchaChenge}
						/>
						<br />
						<Button
							label="Sign Up"
							disabled={
								!validName ||
								!validPwd ||
								!validMatch ||
								!validMail ||
								!validMailMatch ||
								!recaptchaSuccess
									? true
									: false
							}
						/>
					</form>
					<p>
						Wanna go back?
						<br />
						<span className="line">
							<Link to="/login">Login Page</Link>
						</span>
					</p>
				</section>
			)}
		</>
	);
};

export default Register;
