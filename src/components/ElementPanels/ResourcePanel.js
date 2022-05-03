import React from "react";
import "bulma/sass/utilities/_all.sass"
import "bulma/sass/components/menu.sass"
import ItemBox from "../ItemBox/ItemBox"
import {Columns, Section} from 'react-bulma-components'
import ContainerBox from "../ContainerBox/ContainerBox";


function ResourcePanel() {

    return(
        <>
        <ContainerBox>
            <ItemBox topLabel="Minerals" image="mineral-icon.png" bottomLabel="TODO"/>
            <ItemBox topLabel="Wood" image="wood-icon.png" bottomLabel="TODO"/>
            <ItemBox topLabel="Gold" image="gold-icon.png" bottomLabel="TODO"/>
            <ItemBox topLabel="Food" image="food-plate-icon.png" bottomLabel="TODO"/>
        </ContainerBox>     
        </>
    );

}

export default ResourcePanel