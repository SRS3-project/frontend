/* import { useNavigate, Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout"; */
import Button from "../Button/Button";
import React from "react";
import RedirectButton from "../Button/RedirectButton/RedirectButton";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/components/menu.sass";
import "bulma/css/bulma.min.css";
import { Menu } from "react-bulma-components";
import styles from "./lateralmenu.module.css";
import TechPanel from "../Panels/TechPanel";
import TroopPanel from "../Panels/TroopPanel";

//const stampa = () => { console.log('pressed button')}

//JSX
function LateralMenu({ descriptions, setInfo, setItems, setElements }) {
	/* const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    } */

	return (
		<>
			<Menu>
				<Menu.List title="General">
					<Menu.List.Item>
						<Button
							label="Overview"
							onClick={(e) => {
								e.preventDefault();
								setInfo(descriptions.buildings.home);
							}}
						/>
					</Menu.List.Item>
				</Menu.List>

				<Menu.List title="Domain">
					<Menu.List.Item>
						<Button
							label="Castle"
							onClick={(e) => {
								e.preventDefault();
								setInfo(descriptions.buildings.castle);
							}}
						/>
					</Menu.List.Item>
					{/* <Menu.List.Item>
						<Button
							label="City"
							onClick={(e) => {
								e.preventDefault();
								setInfo(descriptions.buildings.city);
							}}
						/>
					</Menu.List.Item> */}
					{true && (
						<Menu.List.Item>
							<Button
								label="Barracs"
								onClick={(e) => {
									e.preventDefault();
									setInfo(descriptions.buildings.barracs);
									setItems(descriptions.troops);
									setElements({
										filter:"barracs",
										desc: descriptions.troops,
										setInfo:setInfo
									});
								}}
							/>
						</Menu.List.Item>
					)}
					{true && (
						<Menu.List.Item>
							<Button
								label="Mage Tower"
								onClick={(e) => {
									e.preventDefault();
									setInfo(descriptions.buildings.magetower);
									setItems(descriptions.technologies);
									setElements({
										filter:"tower",
										desc: descriptions.technologies,
										setInfo:setInfo
									});
								}}
							/>
						</Menu.List.Item>
					)}
				</Menu.List>

				<Menu.List title="Troops">
					<Menu.List.Item>
						<Button
							label="Troops"
							onClick={(e) => {
								e.preventDefault();
								setInfo("This is your army");
								setItems(descriptions.troops);
								//setElements(["troops",descriptions.troops, setInfo ]);
								setElements({
									filter:"troops",
									desc: descriptions.troops,
									setInfo:setInfo
								});
							}}
						/>
					</Menu.List.Item>
					{/* <Menu.List.Item>
						<RedirectButton label="Defence" path="/defence" />
					</Menu.List.Item> */}
				</Menu.List>

				<Menu.List title="World">
					<Menu.List.Item>
						<RedirectButton label="World" path="/world" />
					</Menu.List.Item>
				</Menu.List>

				{/* <Menu.List title="User's">
                <Menu.List.Item>
                    <RedirectButton label='Editor' path='/editor'/>
                </Menu.List.Item>
                <Menu.List.Item>
                    <RedirectButton label='Admin' path='/admin'/>   
                </Menu.List.Item>
                <Menu.List.Item>
                    <RedirectButton label='Lounge' path='/lounge'/>  
                </Menu.List.Item>
                <Menu.List.Item>
                    <RedirectButton label='Links' path='/linkpage'/>   
                </Menu.List.Item>
                <Menu.List.Item>
                    <Button label='Sign Out' onClick={signOut}/>   
                </Menu.List.Item>
            </Menu.List> */}

			</Menu>
		</>
	);
}

export default LateralMenu;
