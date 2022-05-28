import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button/Button";
import useAuth from "../hooks/useAuth";

import ReCAPTCHA from "react-google-recaptcha";

import axios from "../api/axios";
const LOGIN_URL = "/login";

const CAPTCHA_URL = "/checkRecaptcha";
const CAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY;

const Login = () => {
	const { auth, setAuth, persist, setPersist } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [pwd, setPwd] = useState("");
	const [errMsg, setErrMsg] = useState("");

	const [recaptchaSuccess, setRecaptchaSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [user, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				LOGIN_URL,
				{ username: user, password: pwd },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			const accessToken = response?.data?.accessToken;
			const roles = response?.data?.roles;
			localStorage.setItem(
				"auth",
				JSON.stringify({ user, roles, accessToken })
			);
			localStorage.setItem("persist", persist);
			//setAuth({ user, pwd, roles, accessToken });
			setAuth({ user, roles, accessToken });
			console.log("auth is ", typeof auth);
			setUser("");
			setPwd("");
			navigate(from, { replace: true });
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Missing Username or Password");
			} else if (err.response?.status === 401) {
				setErrMsg("Unauthorized");
			} else {
				setErrMsg("Login Failed");
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
		}
	};

	const togglePersist = () => {
		setPersist((prev) => !prev);
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
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					ref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.target.value)}
					value={user}
					required
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					onChange={(e) => setPwd(e.target.value)}
					value={pwd}
					required
				/>{" "}
				<br />
				<ReCAPTCHA sitekey={CAPTCHA_KEY} onChange={onRecaptchaChenge} />
				<br />
				<Button
					label="Sign in"
					disabled={!recaptchaSuccess ? true : false}
				/>{" "}
				<br />
				<div className="persistCheck">
					<input
						type="checkbox"
						id="persist"
						onChange={togglePersist}
						checked={!!persist}
						//checked need TOBEFIXED don't render correctly, with !! we at least don't see the error on console
					/>
					<label htmlFor="persist">Trust This Device</label>
				</div>
			</form>
			<p>
				Need an Account?
				<br />
				<span className="line">
					<Link to="/register">Sign Up</Link>
				</span>
			</p>
			<p>
				Forgot password?
				<br />
				<span className="line">
					<Link to="/forgotPassword">Recover Password</Link>
				</span>
			</p>
		</section>
	);
};

export default Login;
