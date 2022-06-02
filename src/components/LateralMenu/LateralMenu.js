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
import descriptions from "../../locales/en.json"

//const stampa = () => { console.log('pressed button')}

//JSX
function LateralMenu({ setFilter, setInfo }) {
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
								setFilter({});
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
								setFilter("castle");
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
									setFilter("barracs");
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
									setFilter("tower");
								}}
							/>
						</Menu.List.Item>
					)}
				</Menu.List>

				<Menu.List title="Army">
					<Menu.List.Item>
						<Button
							label="Troops"
							onClick={(e) => {
								e.preventDefault();
								setInfo(descriptions.buildings.army);
								setFilter("troops");
							}}
						/>
					</Menu.List.Item>
					{/* <Menu.List.Item>
						<RedirectButton label="Defence" path="/defence" />
					</Menu.List.Item> */}
				</Menu.List>

				<Menu.List title="World">
					<Menu.List.Item>
						<Button
							label="World"
							onClick={(e) => {
								e.preventDefault();
								setInfo(descriptions.buildings.world);
								setFilter("world");
							}}
						/>
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
