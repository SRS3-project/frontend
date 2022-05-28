import React from 'react'
import { FaPlus } from 'react-icons/fa'
import styles from './troop.builder.css'
import { useState } from 'react'
import { axiosUser } from '../../api/axios'
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';

const TROOPBUILD_URL = '/game/build';

const TroopBuilder = ({item}) => {
  
  // For The Async Build Request
  const { user, setUser } = useUser();
  const { auth } = useAuth();

  // For Component Functionality
  const [build, setBuild] = useState({});
  const [val,setVal] = useState('');
  

  const buildTroopsRequest = async (toBuild) => {
		console.log("POST Request: Build troops")

		try{

			const requestUrl = `${TROOPBUILD_URL}`;
			console.log("requestUrl: ", requestUrl);
			
			let response = await axiosUser.post(
				requestUrl,
				{ toBuild },
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

		}catch(err) {
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
	}

  const handleSubmmit = (e) => {
		
    e.preventDefault();

		console.log("Submitted: ", build.amount,"x", build.type);
		
		//additem
		buildTroopsRequest(build);

		setBuild('');

		if(!build) return;

		console.log('end handleSubmmit');

    setVal('');
	}  
  
  return (
    <form className='buildForm' onSubmit={handleSubmmit}>
        <label htmlFor='buildItem' style={{display: "none"}}> Add Item</label>
        <input
            className='input'
            autoFocus
            id='itemBuild'
            type='text'
            placeholder={item.name}
            required
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              setBuild({
                "type": `${item.id.toUpperCase()}`,
                "amount": e.target.value		
              });
            }} 
        />
        <button
            type='submit'
            aria-label='Build'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default TroopBuilder