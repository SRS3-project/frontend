/* import { useNavigate, Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout"; */
import Button from "../Button/Button"
import React from "react";
import RedirectButton from "../Button/RedirectButton/RedirectButton";
import "bulma/sass/utilities/_all.sass"
import "bulma/sass/components/menu.sass"
import 'bulma/css/bulma.min.css';
import { Menu } from "react-bulma-components";


//const stampa = () => { console.log('pressed button')}


function barracsButton(props) {

    let hasBarracs = 1; //get LVL from user {getBarracs}
    if(hasBarracs > 0)
    {
        return(
            <Menu.List.Item>
                <RedirectButton label='Barracs' path='/barracs'/>
            </Menu.List.Item>                
        );
    }
    return(null);
}

function towerButton(props) {
    let hasTower = 1; //get LVL from user {getTower}

    if(hasTower > 0)
    {
        return(
            <Menu.List.Item>
                <RedirectButton label='Mage Tower' path='/magetower'/>
            </Menu.List.Item>
        );
    }
    return(null);
}


//JSX
function LateralMenu() {
    
    /* const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    } */

<<<<<<< Updated upstream
=======
    // Lateral Menu State
    /* const [structures, setStructures] = useState(
        {
            barracsLvl: 1,
            towerLvl: 0
        }
    ) */
    const [structures, setStructures] = useState(
        () => {
            const saved = localStorage.getItem("structures");
            const initialValue = JSON.parse(saved);
            return initialValue || {
                barracsLvl: 0,
                towerLvl: 0
            };
        }
    )



    const handleLoad = (id) => {
        console.log(`structures ${structures.barracsLvl} and ${id}`);

        //Only-4-Testing: Enable Barracs Button from state
        let newStructure = {};
        
        if(structures.barracsLvl === 0 && structures.towerLvl === 0)
        {
            newStructure = {
                barracsLvl: 1,
                towerLvl: 1
            };
        }
        else{
            newStructure = {
                barracsLvl: 0,
                towerLvl: 0
            }
        }
        
        //Only-4-Testing: Enable Tower Button from state
        //const newStructures = structures.map((structures) => structures.towerLvl === 0 ? {...structures, TowerLvl: 1} : structures);
        
        setStructures(newStructure);

        localStorage.setItem('structures', JSON.stringify(newStructure));
    }   

    // To show the "Barracs" Button
    const barracsButton = () => {

        let hasBarracs = 1; //get LVL from user {getBarracs}
        
        if(structures.barracsLvl > 0)
        {
            return(
                <Menu.List.Item>
                    <RedirectButton label='Barracs' path='/barracs'/>
                </Menu.List.Item>                
            );
        }
        return(null);
    }
    
    // To show the "Tower" ButtonS
    const towerButton = () => {
        
        let hasTower = 1; //get LVL from user {getTower}
        
        if(structures.towerLvl > 0)
        {
            return(
                <Menu.List.Item>
                    <RedirectButton label='Mage Tower' path='/magetower'/>
                </Menu.List.Item>
            );
        }
        return(null);
    }
    
>>>>>>> Stashed changes
    return(
        <>
        <Menu>
            <button onClick={() => handleLoad(3)}>Io inverto lo stato</button>
            <Menu.List title="General">
                <Menu.List.Item>
                    <RedirectButton label='Overview' path='/'/>
                </Menu.List.Item>
            </Menu.List>

            <Menu.List title="Domain">
                <Menu.List.Item>
                    <RedirectButton label='Castle' path='/castle'/>
                </Menu.List.Item>
                <Menu.List.Item>
                    <RedirectButton label='City' path='/castle'/>
                </Menu.List.Item>

                {barracsButton()}
                {towerButton()}
                
            </Menu.List>
            
            <Menu.List title="Troops">
                <Menu.List.Item>
                    <RedirectButton label='Army' path='/army'/>
                </Menu.List.Item>
                <Menu.List.Item>
                    <RedirectButton label='Defence' path='/defence'/>   
                </Menu.List.Item>
            </Menu.List>

            <Menu.List title="World">
                <Menu.List.Item>
                    <RedirectButton label='World' path='/world'/> 
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
    )
}

export default LateralMenu