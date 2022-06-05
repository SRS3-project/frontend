import style from "./banners.css"

import ItemBox from "../../ItemBox/ItemBox";
import TechBuilder from "../../Builders/TechBuilder";
import ContainerBox from "../../ContainerBox/ContainerBox";

import minerals from "../../../images/resources/mineral-icon.png"
import wood from "../../../images/resources/wood-icon.png";
import gold from "../../../images/resources/gold-icon.png";
import food from "../../../images/resources/food-icon.png";
import { IsValid } from "../../../utils/checkParams";
import { Columns } from "react-bulma-components";


const StructureBanner = ({info}) => {

    return(
        <>
            {IsValid(info) ? (
                <ContainerBox>
                <h3>Structure Costs:</h3>
                <br/>
                <ul id="horizontal-list-centered">
                   {!(info.cost.food === 0) && <li key={0}>
                        <ItemBox
                            topLabel=''
                            image={food}
                            bottomLabel={info.cost.food}
                        />
                    </li>}
                    {!(info.cost.gold === 0) && <li key={1}>
                        <ItemBox
                            topLabel=''
                            image={gold}
                            bottomLabel={info.cost.gold}
                        />
                    </li>}
                    {!(info.cost.minerals === 0) && <li key={2}>
                        <ItemBox
                            topLabel=''
                            image={minerals}
                            bottomLabel={info.cost.minerals}
                        />
                    </li>}
                    {!(info.cost.wood === 0) && <li key={3}>
                        <ItemBox
                            topLabel=''
                            image={wood}
                            bottomLabel={info.cost.wood}
                        />
                    </li>}
                </ul>

                <h3>Structure Production:</h3>
                <br/>
                <ul id="horizontal-list-centered">
                    {!(info.production.food === 0) && <li key={0}>
                        <ItemBox
                            topLabel=''
                            image={food}
                            bottomLabel={info.production.food}
                        />
                    </li>}
                    {!(info.production.gold === 0) && <li key={1}>
                        <ItemBox
                            topLabel=''
                            image={gold}
                            bottomLabel={info.production.gold}
                        />
                    </li>}
                    {!(info.production.minerals === 0) && <li key={2}>
                        <ItemBox
                            topLabel=''
                            image={minerals}
                            bottomLabel={info.production.minerals}
                        />
                    </li>}
                    {!(info.production.wood === 0) && <li key={3}>
                        <ItemBox
                            topLabel=''
                            image={wood}
                            bottomLabel={info.production.wood}
                        />
                    </li>}
                </ul>
  
                <h3>Structure Consumption:</h3>
                <br/>
                <ul id="horizontal-list-centered">
                    {!(info.consuption.food === 0) && <li key={0}>
                        <ItemBox
                            topLabel=''
                            image={food}
                            bottomLabel={info.consuption.food}
                        />
                    </li>}
                    {!(info.consuption.gold === 0) && <li key={1}>
                        <ItemBox
                            topLabel=''
                            image={gold}
                            bottomLabel={info.consuption.gold}
                        />
                    </li>}
                    {!(info.consuption.minerals === 0) && <li key={2}>
                        <ItemBox
                            topLabel=''
                            image={minerals}
                            bottomLabel={info.consuption.minerals}
                        />
                    </li>}
                    {!(info.consuption.wood === 0) && <li key={3}>
                        <ItemBox
                            topLabel=''
                            image={wood}
                            bottomLabel={info.consuption.wood}
                        />
                    </li>}
                </ul>

                <TechBuilder item={info}/>
            </ContainerBox>
            ) : (
                <div>Server sending datas... via smoke signals...</div>
            )}
        </>
    );

}

export default StructureBanner;

