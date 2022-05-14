import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import Button from './Button/Button';

import axios from '../api/axios';
const RESETPASSWORD_URL = '/forgotpassword/email';

const ResetPassword = () => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log ("location"); 
    console.log (location); 
    console.log ("navigate"); 
    console.log (navigate); 

    /* let { id } = useParams();
    console.log (id);  */
    /* const location = useLocation();
    console.log (location);  */
    /* const id = "banana"; */
    return (
        <section>
            ResetPassword
            <br/>
            {/* { id } */}
        </section>
    )
}

export default ResetPassword