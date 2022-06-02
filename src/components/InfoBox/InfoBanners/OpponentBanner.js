
import ContainerBox from "../../ContainerBox/ContainerBox";
import useUser from "../../../hooks/useUser";



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
		    <ContainerBox>
                <h1>Username: </h1>
            </ContainerBox>
            <ContainerBox>
                <h1>{info.username}</h1>
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
