import Button from "../Button";
import { useNavigate } from "react-router-dom";

function RedirectButton(props) {
	const navigate = useNavigate();

	function routerChange(path) {
		navigate(path);
	}

	return (
		<Button label={props.label} onClick={() => routerChange(props.path)} />
	);
}

export default RedirectButton;
