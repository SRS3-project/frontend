import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import Button from './Button/Button';

import axios from '../api/axios';
const RESETPASSWORD_URL = '/forgotpassword/email';

const ResetPassword = () => {

    const { token } = useParams();
    console.log (token); 
    /* const location = useLocation();
    console.log (location);  */
    /* const token = "banana"; */
    return (
        <section>
            ResetPassword
            <br/>
            { token }
        </section>
    )
}

export default ResetPassword