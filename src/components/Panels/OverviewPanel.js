import gif from "../../images/others/pigeon_fly.gif"
import ContainerBox from "../ContainerBox/ContainerBox";

const OverviewPanel = () => {
    return(
        <ContainerBox>
            <img id="funnigif"src={gif} />
        </ContainerBox>
    );
}
export default OverviewPanel;