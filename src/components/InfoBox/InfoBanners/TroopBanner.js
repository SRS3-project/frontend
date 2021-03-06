import style from "./banners.css"
import ItemBox from "../../ItemBox/ItemBox";
import ContainerBox from "../../ContainerBox/ContainerBox";

import minerals from "../../../images/resources/mineral-icon.png"
import wood from "../../../images/resources/wood-icon.png";
import gold from "../../../images/resources/gold-icon.png";
import food from "../../../images/resources/food-icon.png";
import TroopBuilder from "../../Builders/TroopBuilder";
import { IsValid } from "../../../utils/checkParams";

const STATS = [
    "health",
    "armor",
    "attack",
    "speed",
    "backpack",
    "hunger"
]

const TroopBanner = ({info}) => {

    return(
        <>
            {IsValid(info) ? (
                <>
                    <ContainerBox>
                        <ul id="horizontal-list-centered">
                            <li id="highlight" key="health">{STATS[0]}: {info.stats.health}</li>
                            <li id="highlight" key="armor">{STATS[1]}: {info.stats.armor}</li>
                            <li id="highlight" key="attack">{STATS[2]}: {info.stats.attack}</li>
                            <li id="highlight" key="speed">{STATS[3]}: {info.stats.speed}</li>
                            <li id="highlight" key="backpack">{STATS[4]}: {info.stats.backpack}</li>
                            <li id="highlight" key="hunger">{STATS[5]}: {info.stats.hunger}</li>
                        </ul>
                    </ContainerBox>
                    <ContainerBox>                
                        <br/>
                        <h3>Unit Costs:</h3>
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
                        <TroopBuilder item={info}/>
                    </ContainerBox>
                </>
            ) : (
                <div>Server sending datas... via smoke signals...</div>
            )}
        </>
    );

}

export default TroopBanner;

