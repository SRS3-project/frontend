import { GiCrossedSwords }  from 'react-icons/gi';

const UsersListItem = ({opponent, setInfo}) => {
    
    const handleAttack = () => {
        console.log("attacked ", opponent.username);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("click");
        setInfo(opponent);
    }
    
    
    return (
        <li className="opponent" key={opponent.id} onClick={(e)=>{handleClick(e)}}>
            <label>{opponent.username}</label>
            
            <GiCrossedSwords
                onClick={(e) => {
                    e.preventDefault();
                    handleAttack();
                }}
                role="button"
                tabIndex="0"
            />            
        </li>
    )
}

export default UsersListItem;