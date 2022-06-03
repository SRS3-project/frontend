import style from "./banners.css";
import ContainerBox from "../../ContainerBox/ContainerBox";
import useUser from "../../../hooks/useUser";
import { FaRegFrownOpen, FaRegGrinAlt } from "react-icons/fa";
import {IsDataValid} from "../../../utils/checkParams.js"

const OpponentBanner = ({ info }) => {
	const { user } = useUser();

	const enemyLvlGauge = () => {
		if (user.level > info.level) {
			return { color: "#00ff00" };
		} else if (user.level < info.level) {
			return { color: "#ff0000" };
		} else {
			return { color: "#000000" };
		}
	};

	return (
		<>
			{IsDataValid(info,user) ? (
			<>
				<ContainerBox>
					<div type="enemy">
						{user.level < info.level ? (
							<FaRegFrownOpen
								style={{
									color: "#ff0000",
									width: "96px",
									minWidth: "48px",
									height: "72px",
								}}
							/>
						) : (
							<FaRegGrinAlt
								style={{
									color: "#00ff00",
									width: "96px",
									minWidth: "48px",
									height: "72px",
								}}
							/>
						)}
					</div>
				</ContainerBox>
				<ContainerBox>
					<h1>Username: </h1>
				</ContainerBox>
				<br />
				<ContainerBox>
					<h1 id="uname">{info.username}</h1>
				</ContainerBox>
				<br />
				<ContainerBox>
					<h2 style={enemyLvlGauge()}>Level: {info.level}</h2>
				</ContainerBox>
				<br />
				<ContainerBox>
					<h3>Coordinates:</h3>
				</ContainerBox>
				<ContainerBox>
					<ul id="horizontal-list-centered">
						<li key="x" id="highlight">
							X: {info.x}
						</li>
						<li key="y" id="highlight">
							Y: {info.y}
						</li>
					</ul>
				</ContainerBox>
			</>
			) : (
				<div>Server sending datas... via smoke signals...</div>
			)}
		</>
	);
};

export default OpponentBanner;
