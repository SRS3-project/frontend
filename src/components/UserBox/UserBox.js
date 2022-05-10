import React from 'react'
import styles from './userbox.module.css'
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

import RedirectButton from "../Button/RedirectButton/RedirectButton";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import Button from "../Button/Button"

const UserBox = () => {

  const { auth } = useContext(AuthContext);
  /* const userName = auth?.username; */
  const userName = 'banana';

  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
      await logout();
      navigate('/login');
  }

  return (
    <div className= {styles.container}>

      <h1> Benvenuto: {userName} </h1>

      <Button label='Sign Out' onClick={signOut}/> 

    </div>
  )
}

export default UserBox