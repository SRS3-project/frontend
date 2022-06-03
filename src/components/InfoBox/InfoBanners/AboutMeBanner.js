import ContainerBox from "../../ContainerBox/ContainerBox";
import authors from "../../../locales/authors.json";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGitlab, AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import style from "./banners.css";

const AboutMeBanner = () => {
	return (
		<>
			<ContainerBox>
				<h1>{authors.project.name}</h1>
			</ContainerBox>
			<ContainerBox>
				<div type="about">
					{authors.project.mail !== "" && (
						<p id="about">
							<HiOutlineMail
								onClick={() =>
									window.open(authors.project.mail)
								}
								style={{
									width: "48px",
									minWidth: "48px",
									height: "36px",
								}}
							/>
						</p>
					)}
					{authors.project.github !== "" && (
						<p id="about">
							<AiFillGithub
								onClick={() =>
									window.open(authors.project.github)
								}
								style={{
									width: "48px",
									minWidth: "48px",
									height: "36px",
								}}
							/>
						</p>
					)}
					{authors.project.gitlab !== "" && (
						<p id="about">
							<AiFillGitlab
								onClick={() =>
									window.open(authors.project.gitlab)
								}
								style={{
									width: "48px",
									minWidth: "48px",
									height: "36px",
								}}
							/>
						</p>
					)}
					{authors.project.facebook !== "" && (
						<p id="about">
							<FaFacebookF
								onClick={() =>
									window.open(authors.project.facebook)
								}
								style={{
									width: "48px",
									minWidth: "48px",
									height: "36px",
								}}
							/>
						</p>
					)}
					{authors.project.instagram !== "" && (
						<p id="about">
							<FaInstagram
								onClick={() =>
									window.open(authors.project.instagram)
								}
								style={{
									width: "48px",
									minWidth: "48px",
									height: "36px",
								}}
							/>
						</p>
					)}
					{authors.project.twitter !== "" && (
						<p id="about">
							<FaTwitter
								onClick={() =>
									window.open(authors.project.twitter)
								}
								style={{
									width: "48px",
									minWidth: "48px",
									height: "36px",
								}}
							/>
						</p>
					)}
				</div>
			</ContainerBox>
		</>
	);
};

export default AboutMeBanner;
