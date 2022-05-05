import React from "react";
import "bulma/sass/utilities/_all.sass"
import "bulma/sass/components/menu.sass"
import ItemBox from "../ItemBox/ItemBox"
import ContainerBox from '../ContainerBox/ContainerBox'

import mineral from '../../images/mineral-icon.png'
import wood from '../../images/wood-icon.png'
import gold from '../../images/gold-icon.png'
import food from '../../images/food-icon.png'

function ResourcePanel() {

    return(
        <>
        <ContainerBox>
            <ItemBox topLabel="Minerals" image={mineral} bottomLabel="TODO"/>
            <ItemBox topLabel="Wood" image={wood} bottomLabel="TODO"/>
            <ItemBox topLabel="Gold" image={gold} bottomLabel="TODO"/>
            <ItemBox topLabel="Food" image={food} bottomLabel="TODO"/>
        </ContainerBox>   
        </>
    );

}

export default ResourcePanel