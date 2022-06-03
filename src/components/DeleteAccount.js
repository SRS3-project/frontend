import React from "react";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Button from "./Button/Button";

import {
	faCheck,
	faTimes,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

import axios from "../api/axios";
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const RESETPASSWORD_URL = "/deleteuser";

const DeleteAccount = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const { auth } = useAuth();
	const logout = useLogout();

	const [pwd, setPwd] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	const errRef = useRef();

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setErrMsg("");
	}, [pwd, matchPwd]);


	const signOut = async () => {
		await logout();
		navigate("/login");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = PWD_REGEX.test(pwd);
		if (!v1) {
			setErrMsg("Invalid Entry");
			return;
		}
		try {
			const response = await axios.post(
				RESETPASSWORD_URL,
				{ 
					 token: auth.accessToken,
					 userToDelete: auth.user,
					 password: pwd 
					},
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			// TODO: remove console.logs before deployment
			//console.log(JSON.stringify(response?.data));
			//console.log(JSON.stringify(response))

			localStorage.setItem("user", "{}");
            localStorage.setItem("auth", "{}");
			setSuccess(true);
			//clear state and controlled inputs
			setPwd("");
			setMatchPwd("");
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else {
				setErrMsg(err?.response?.data?.message);
			}
			errRef.current.focus();
		}
		if (success) await signOut();
	};

	return (
		<section>
			<p
				ref={errRef}
				className={errMsg ? "errmsg" : "offscreen"}
				aria-live="assertive"
			>
				{errMsg}
			</p>
			<h1>Delete Account</h1>
			<br />
			<p>
				To delete your account you must insert the password, this action
				is not reversable and for consistency of the database your
				username and mail will permanently locked.
			</p>
			<form /*onSubmit={handleSubmit}*/>
				<label htmlFor="password">
					Password:
					<FontAwesomeIcon
						icon={faCheck}
						className={validPwd ? "valid" : "hide"}
					/>
					<FontAwesomeIcon
						icon={faTimes}
						className={validPwd || !pwd ? "hide" : "invalid"}
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
						pwdFocus && !validPwd ? "instructions" : "offscreen"
					}
				>
					<FontAwesomeIcon icon={faInfoCircle} />
					8 to 24 characters.
					<br />
					Must include uppercase and lowercase letters, a number and a
					special character.
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
						className={validMatch && matchPwd ? "valid" : "hide"}
					/>
					<FontAwesomeIcon
						icon={faTimes}
						className={validMatch || !matchPwd ? "hide" : "invalid"}
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
						matchFocus && !validMatch ? "instructions" : "offscreen"
					}
				>
					<FontAwesomeIcon icon={faInfoCircle} />
					Must match the first password input field.
				</p>
				<br />
				<Button
					label="Delete account permanently"
					disabled={!validPwd || !validMatch ? true : false}
					onClick={handleSubmit}
				/>
			</form>
			<p>
				Do you want to go back?
				<br />
				<span className="line">
					<Link to="/">Home</Link>
				</span>
			</p>
		</section>
	);
};

export default DeleteAccount;
