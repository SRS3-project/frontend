import React from "react";
import "bulma/sass/utilities/_all.sass"
import "bulma/sass/components/menu.sass"
import ItemBox from "../ItemBox/ItemBox";

function ResurcePanel() {

    return(
        <>
        <div id="resource-box">
            <div class="Columns">
                <div class="Column">
                    <ItemBox topLabel="Minerals" image="mineral-icon.png" bottomLabel="TODO"/>
                </div>
                <div class="Column">
                    <ItemBox topLabel="Wood" image="wood-icon.png" bottomLabel="TODO"/>
                </div>
                <div class="Column">
                    <ItemBox topLabel="Gold" image="gold-icon.png" bottomLabel="TODO"/>
                </div>
                <div class="Column">
                    <ItemBox topLabel="Food" image="food-plate-icon.png" bottomLabel="TODO"/>
                </div>
            </div>
        </div>
        </>
    );

}

export default ResourcePanel