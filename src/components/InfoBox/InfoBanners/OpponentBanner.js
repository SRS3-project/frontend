import style from "./banners.css"
import ContainerBox from "../../ContainerBox/ContainerBox";
import useUser from "../../../hooks/useUser";
import { FaRegFrownOpen, FaRegGrinAlt } from "react-icons/fa";



const OpponentBanner = ({info}) => {

    const {user} = useUser();

    const enemyLvlGauge = () => {
        if(user.level > info.level) {
            return {color: "#00ff00"};
        }
        else if(user.level < info.level) {
            return {color: "#ff0000"};
        }
        else
        {
            return {color: "#000000"};
        }
    }

    return(
        <>
		    <ContainerBox >
                <div id="enemy">
                    {user.level < info.level ? 
                    (
                        <FaRegFrownOpen style={{color:"#ff0000"}}/>
                    ) : (
                        <FaRegGrinAlt style={{color:"#00ff00"}}/>
                    )}    
                </div>                
            </ContainerBox>
            <ContainerBox>
                <h1>Username: </h1>
            </ContainerBox>
            <br />
            <ContainerBox>
                <h1 id="uname">{info.username}</h1>
            </ContainerBox>
            <br />
            <ContainerBox>
				<h2 style={enemyLvlGauge()}
                >Level: {info.level}</h2>
			</ContainerBox>
			<br />
            <ContainerBox>
            	<h3>Coordinates:</h3>
            </ContainerBox>
            <ContainerBox>
            	<ul id="horizontal-list-centered">
					<li key="x" id="highlight">X: {info.x}</li>
					<li key="y" id="highlight">Y: {info.y}</li>
				</ul>
            </ContainerBox>
        </>
    );

}

export default OpponentBanner;
