import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import TryHarder from "./components/TryHarder";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import ConfirmEmail from "./components/ConfirmEmail";

import { UserProvider } from "./context/UserProvider";

const ROLES = {
	User: 2001,
	Editor: 1984,
	Admin: 5150,
};

function App() {
	// const sock = io(env.RTM_URL, { transports: ['websocket'] });
	// sock.on('connect', () => {
	//     sock.emit('auth', env.RTM_AUTH_TOKEN);
	// })

	return (
		<AuthProvider>
			<UserProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* public routes */}
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
							<Route
								path="forgotPassword"
								element={<ForgotPassword />}
							/>
							<Route
								path="resetPassword"
								element={<ResetPassword />}
							/>
							<Route
								path="confirmemail"
								element={<ConfirmEmail />}
							/>

							<Route path="tryharder" element={<TryHarder />} />

							{/* <Route path="linkpage" element={<LinkPage />} /> */}
							<Route
								path="unauthorized"
								element={<Unauthorized />}
							/>

							{/* we want to protect these routes */}
							<Route element={<PersistLogin />}>
								<Route
									element={
										<RequireAuth
											allowedRoles={[ROLES.User]}
										/>
									}
								>
									<Route path="/" element={<Home />} />
								</Route>

								{/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
							<Route path="editor" element={<Editor />} />
							</Route>


							<Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
							<Route path="admin" element={<Admin />} />
							</Route>

							<Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
							<Route path="lounge" element={<Lounge />} />
							</Route> */}
							</Route>

							{/* catch all */}
							<Route path="*" element={<Missing />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</UserProvider>
		</AuthProvider>
	);
}

export default App;
