import { GiCrossedSwords }  from 'react-icons/gi';
import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { axiosUser } from '../../api/axios';

const ATTACK_URL = "/game/attack"

const UsersListItem = ({opponent, setInfo}) => {
    
    const { user, setUser } = useUser();
    const { auth } = useAuth();
    const [valid, setValid] = useState("");

    useEffect(() => {
        
        const result =  user.troops.reduce((total, current) => total = total+current.amount,0);

        setValid(result);
    },[user])

    const handleAttack = async() => {
        console.log("POST Request: Build troops");
        console.log("valid input", valid);
		
        if (valid) {
			try {
				const requestUrl = `${ATTACK_URL}`;
				console.log("requestUrl: ", requestUrl);

				const response = await axiosUser.post(
					requestUrl,
					{
                        fromUsername: `${auth.user}`,
                        enemyUsername: `${opponent.username}`,
                        army: user.troops
                    },
					{
						headers: {
							"Content-Type": "application/json",
							//new backend
							Authorization: `Bearer ${auth.accessToken}`,
							//old backend
							//Authorization: auth.accessToken,
						},
						withCredentials: true,
					}
				);
				setUser(response.data);
				console.log(response);

			} catch (err) {
				//console.log(err);
				if (!err?.response) {
					console.log("FETCH USER DATA: No Server Response");
				} else if (err.response?.status === 401) {
					console.log("FETCH USER DATA: Unauthorized");
				} else {
					console.log("FETCH USER DATA: Unknown error");
				}
			} finally {
				console.log("user: ", user);
			}
		} else {
			console.log("Empty State: Request Not Executed");
		}
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("click");
        setInfo(opponent);
    }
    
    const enemyName = opponent?.username?.charAt(0).toUpperCase() + opponent?.username?.slice(1);
    
    return (
        <li className="opponent" key={opponent.id} onClick={(e)=>{handleClick(e)}}>
            <label id='opponentLabel'>{enemyName}</label>
            <label id='opponentLevel'>Level: {opponent.level}</label>
            <label id='opponentXp'>XP: {opponent.xp}</label>
            
            {(opponent.username === auth.username) &&<GiCrossedSwords
                onClick={(e) => {
                    e.preventDefault();
                    handleAttack();
                }}
                role="button"
                tabIndex="0"
            />}            
        </li>
    )
}

export default UsersListItem;