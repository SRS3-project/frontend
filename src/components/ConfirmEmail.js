import React from 'react'
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate, useLocation } from 'react-router-dom';

import axios from '../api/axios';

const CONFIRMEMAIL_URL = '/confirmemail/email';

const ConfirmEmail = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const sendMail = async () => {
        // if button enabled with JS hack
        try {
            const response = await axios.put(CONFIRMEMAIL_URL,
                { token: token },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // TODO: remove console.logs before deployment
            //console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            console.log (success);
            //clear state and controlled inputs
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('	The password is not strong, the token has expired or has been already used');
            } else if (err.response?.status === 409) {
                setErrMsg('	Either the user does not exist or the token does not exist');
            } else {
                setErrMsg('Confirmation Failed');
            }
        }
    }
    
    return (
        <>
            {success ? (
                <section>
                    <h1>Success! Email confirmed.</h1>
                    <p>
                        <Link to="/login">Login Page</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <h1>Something went wrong, retray in a minute.</h1>
                    <p>
                        {errMsg}
                    </p>
                    <p>
                        Wanna go back?<br />
                        <Link to="/login">Login Page</Link>
                    </p>
                </section>
            )}
        </>
    )
}

export default ConfirmEmail