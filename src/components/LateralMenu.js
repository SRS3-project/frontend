import { element } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Users from './Users';

//const stampa = () => { console.log('pressed button')}

function barracsButton(props) {
    var hasBarracs = -1; //get LVL from user
    if(hasBarracs > 0)
    {
        return(
            <li><button><Link to="/barracs">Barracs</Link></button></li>
        );
    }
    return(null);
}

function towerButton(props) {
    var hasTower = 1; //get LVL from user

    if(hasTower > 0)
    {
        return(
            <li><button><Link to="/magetower">Mage Tower</Link></button></li>
        );
    }
    return(null);
}

//JSX
function LateralMenu() {
    return(
        <section>
            <ul>
                <li><button><Link to="/home">Overview</Link></button></li>
                <li><button><Link to="/town">Town</Link></button></li>
                <li><button><Link to="/castle">Castle</Link></button></li>
                <li><button><Link to="/city">City</Link></button></li>
                <li><button><Link to="/army">Army</Link></button></li>
                {barracsButton()}
                {towerButton()}
                <li><button><Link to="/world">World</Link></button></li>            
            </ul>
        </section>
    )
}

export default LateralMenu