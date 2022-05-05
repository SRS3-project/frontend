import { useNavigate, Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import Button from "../Button/Button"
import React from "react";
import RedirectButton from "../Button/RedirectButton/RedirectButton";
import "bulma/sass/utilities/_all.sass"
import "bulma/sass/components/menu.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//const stampa = () => { console.log('pressed button')}


function barracsButton(props) {

    let hasBarracs = 1; //get LVL from user {getBarracs}
    if(hasBarracs > 0)
    {
        return(
            <li>
                <span class="icon"><i class="fa fa-flag"></i></span>    
                <RedirectButton label='Barracs' path='/barracs'/>
            </li>
        );
    }
    return(null);
}

function towerButton(props) {
    let hasTower = 1; //get LVL from user {getTower}

    if(hasTower > 0)
    {
        return(
            <li>
                <span class="icon"><i class="fa fa-graduation-cap"></i></span>
                <RedirectButton label='Mage Tower' path='/magetower'/>
            </li>
        );
    }
    return(null);
}

//JSX
function LateralMenu() {
    
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return(
        <>
        <div class="main-content columns is-fullheight">
            <aside class="menu column is-6.5 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <p class="menu-label is-hidden-touch">
                    General
                </p>
                <ul class="menu-list">
                <li>                    
                    <FontAwesomeIcon icon={["fas", "home"]} />
                    <RedirectButton label='Overview' path='/home'/>
                </li>
                </ul>
                <p class="menu-label is-hidden-touch">
                    Domain
                </p>
                <ul class="menu-list">
                    <li>
                        <ul>
                            <li class="has-icon-left">
                                <span class="icon is-small is-left"><i class="fas fa-industry"></i></span>
                                <RedirectButton label='Castle' path='/castle'/>
                            </li>
                            <li>
                                <span class="icon"><i class="fa fa-building"></i></span>    
                                <RedirectButton label='City' path='/city'/>
                            </li>
                            {barracsButton()}
                            {towerButton()}
                        </ul>
                    </li>
                </ul>
                <p class="menu-label is-hidden-touch">
                    Troops
                </p>
                <ul class="menu-list">
                    <li>
                        <span class="icon"><i class="fa fa-bolt"></i></span>
                        <RedirectButton label='Army' path='/army'/>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-bomb"></i></span>
                        <RedirectButton label='Defence' path='/defence'/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span class="icon"><i class="fa fa-globe"></i></span>    
                        <RedirectButton label='World' path='/world'/>
                    </li>
                </ul>
                <p class="menu-label is-hidden-touch">
                    Other
                </p>
                <ul class="menu-list">
                    <li>
                        <span class="icon"><i class="fa fa-bolt"></i></span>
                        <RedirectButton label='Editor' path='/editor'/>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-bomb"></i></span>
                        <RedirectButton label='Admin' path='/admin'/>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-globe"></i></span>    
                        <RedirectButton label='Lounge' path='/lounge'/>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-globe"></i></span>    
                        <RedirectButton label='Links' path='/linkpage'/>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-globe"></i></span>    
                        <Button label='Sign Out' onClick={signOut}/>
                    </li>
                </ul>
            </aside>
        </div>
        </>
    )
}

export default LateralMenu