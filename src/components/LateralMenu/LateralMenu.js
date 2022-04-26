import { element } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import RedirectButton from "../Button/RedirectButton/RedirectButton";
import Users from '../Users';
import ItemBox from "../ItemBox/ItemBox";

// IMAGE IMPORT
import image from '../../images/logo192.png'
import ContainerBox from "../ContainerBox/ContainerBox";

//const stampa = () => { console.log('pressed button')}

function barracsButton(props) {
    var hasBarracs = -1; //get LVL from user
    if(hasBarracs > 0)
    {
        return(
            <li><RedirectButton label='Barracs' path='/barracs'/></li>
        );
    }
    return(null);
}

function barracsIcon(props) {
    var hasBarracs = -1; //get LVL from user
    if(hasBarracs > 0)
    {
        return(
            <li><ItemBox image={image} topLabel='Barracs' path='/barracs'/></li>
        );
    }
    return(null);
}

function towerButton(props) {
    var hasTower = 1; //get LVL from user

    if(hasTower > 0)
    {
        return(
            <li><RedirectButton label='Mage Tower' path='/magetower'/></li>
        );
    }
    return(null);
}

function towerIcon(props) {
    var hasTower = 1; //get LVL from user

    if(hasTower > 0)
    {
        return(
            <li><ItemBox image={image} topLabel='Mage Tower'path='/magetower'/></li>
        );
    }
    return(null);
}

//JSX
function LateralMenu() {
    
    return(
        <section>
            <div class="columns">
                <div class="column">
                    <ul>
                        <li><RedirectButton label='Overview' path='/home'/></li>
                        <li><RedirectButton label='Town' path='/town'/></li>
                        <li><RedirectButton label='Castle' path='/castle'/></li>
                        <li><RedirectButton label='City' path='/city'/></li>
                        <li><RedirectButton label='Army' path='/army'/></li>
                        {barracsButton()}
                        {towerButton()}
                        <li><RedirectButton label='World' path='/world'/></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li><ItemBox image={image} topLabel='Overview' path='/home'/></li>
                        <li><ItemBox image={image} topLabel='Town' path='/town'/></li>
                        <li><ItemBox image={image} topLabel='Castle' path='/castle'/></li>
                        <li><ItemBox image={image} topLabel='City' path='/city'/></li>
                        <li><ItemBox image={image} topLabel='Army' path='/army'/></li>
                        {barracsIcon}
                        {towerIcon}
                        <li><ItemBox image={image} topLabel='World' path='/world'/></li>
                    </ul>
                </div>
            </div>
            <ContainerBox>
                <ItemBox image={image} topLabel='itemName1' bottomLabel='900 $'/>
                <ItemBox image={image} topLabel='itemName1' bottomLabel='900 $'/>
                <ItemBox image={image} topLabel='itemName2' bottomLabel='1000 $'/>
                <ItemBox image={image} topLabel='itemName3' bottomLabel='20 $'/>
            </ContainerBox>

        </section>
    )
}

export default LateralMenu