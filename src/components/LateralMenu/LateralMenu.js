import React from "react";
import RedirectButton from "../Button/RedirectButton/RedirectButton";
import "bulma/sass/utilities/_all.sass"
import "bulma/sass/components/menu.sass"

//const stampa = () => { console.log('pressed button')}

function barracsButton(props) {
    var hasBarracs = 1; //get LVL from user
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
    var hasTower = 1; //get LVL from user

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
    
    return(
        <>
        <section class="main-content columns is-fullheight">
            <aside class="column is-6.5 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <p class="menu-label is-hidden-touch">
                    General
                </p>
                <ul class="menu-list">
                <li>
                    <span class="icon"><i class="fa fa-home"></i></span>
                    <RedirectButton label='Overview' path='/home'/>
                </li>
                </ul>
                <p class="menu-label is-hidden-touch">
                    Domain
                </p>
                <ul class="menu-list">
                    <li>
                        <ul>
                            <li>
                                <span class="icon"><i class="fa fa-industry"></i></span>
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
            </aside>
        </section>
        </>
    )
}

export default LateralMenu