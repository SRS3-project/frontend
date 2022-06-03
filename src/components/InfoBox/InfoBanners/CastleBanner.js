import style from "./banners.css"
import ContainerBox from "../../ContainerBox/ContainerBox";
import useUser from "../../../hooks/useUser";
import { AiTwotoneCrown } from "react-icons/ai";
import { GiCrenelCrown } from "react-icons/gi";
import { Columns } from "react-bulma-components";


const CastleBanner = () => {

    const {user} = useUser();

    return(
        <>
            <Columns>
                <Columns.Column size={4}>
                    <ContainerBox>
                        <h2>Level: {user.level}</h2>
                    </ContainerBox>
                </Columns.Column>
                <Columns.Column size={4}>
                    <ContainerBox>
                        <p id="enemy">
                            {user.xp < (user.level * 100)/2 ? 
                            (
                                <AiTwotoneCrown style={{color:"#ff0000"}}/>
                            ) : (
                                <GiCrenelCrown style={{color:"#00ff00"}}/>
                            )}    
                        </p>
                    </ContainerBox>
                    <ContainerBox>
                        <h1>Username: </h1>
                    </ContainerBox>
                    <br />
                    <ContainerBox>
                        <h1 id="uname">{user.username}</h1>
                    </ContainerBox>
                </Columns.Column>
                <Columns.Column size={4}>
                    <ContainerBox>
                    <ul id="horizontal-list-centered">
                        <li key="x" id="highlight">X: {user.x}</li>
                        <li key="y" id="highlight">Y: {user.y}</li>
				    </ul>
                    </ContainerBox>
                </Columns.Column>
            </Columns>
           {/*                  
            </ContainerBox>
            
            <br />
            <ContainerBox>
				<h2>Level: {user.level}</h2>
			</ContainerBox>
			<br />
            <ContainerBox>
            	<h3>Coordinates:</h3>
            </ContainerBox>
            <ContainerBox>
            	 */}

        </>
    );

}

export default CastleBanner;
