import style from "./banners.css"

import ItemBox from "../../ItemBox/ItemBox";
import TechBuilder from "../../Builders/TechBuilder";
import ContainerBox from "../../ContainerBox/ContainerBox";

import minerals from "../../../images/resources/mineral-icon.png"
import wood from "../../../images/resources/wood-icon.png";
import gold from "../../../images/resources/gold-icon.png";
import food from "../../../images/resources/food-icon.png";
import { IsValid } from "../../../utils/checkParams";


const TechBanner = ({info}) => {

    return(
        <>
            {IsValid(info) ? (
                <ContainerBox>
                <h3>Research Costs:</h3>
                <br/>
                <ul id="horizontal-list-centered">
                    <li key={0}>
                        <ItemBox
                            topLabel=''
                            image={food}
                            bottomLabel={info.cost.food}
                        />
                    </li>
                    <li key={1}>
                        <ItemBox
                            topLabel=''
                            image={gold}
                            bottomLabel={info.cost.gold}
                        />
                    </li>
                    <li key={2}>
                        <ItemBox
                            topLabel=''
                            image={minerals}
                            bottomLabel={info.cost.minerals}
                        />
                    </li>
                    <li key={3}>
                        <ItemBox
                            topLabel=''
                            image={wood}
                            bottomLabel={info.cost.wood}
                        />
                    </li>
                </ul>
                <TechBuilder item={info}/>
            </ContainerBox>
            ) : (
                <div>Server sending datas... via smoke signals...</div>
            )}
        </>
    );

}

export default TechBanner;

