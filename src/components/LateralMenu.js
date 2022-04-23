import { element } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import RedirectButton from "./Button/RedirectButton/RedirectButton";
import Users from './Users';

//const stampa = () => { console.log('pressed button')}

function barracsButton(props) {
    var hasBarracs = -1; //get LVL from user
    if(hasBarracs > 0)
    {
        return(
            <RedirectButton label='Barracs' path='/barracs'/>
        );
    }
    return(null);
}

function towerButton(props) {
    var hasTower = 1; //get LVL from user

    if(hasTower > 0)
    {
        return(
            <RedirectButton label='Mage Tower' path='/magetower'/>
        );
    }
    return(null);
}

//JSX
function LateralMenu() {
    
    return(
        <section>
            <ul>
                <RedirectButton label='Overview' path='/home'/>
                <RedirectButton label='Town' path='/town'/>
                <RedirectButton label='Castle' path='/castle'/>
                <RedirectButton label='City' path='/city'/>
                <RedirectButton label='Army' path='/army'/>
                {barracsButton()}
                {towerButton()}
                <RedirectButton label='World' path='/world'/>
            </ul>
        </section>
    )
}

export default LateralMenu