import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button/Button';

import axios from '../api/axios';
const FORGOTPASSWORD_URL = '/forgotpassword';

const ForgotPassword = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(FORGOTPASSWORD_URL,
                { email: email },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            setEmail('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Invalid Input');
            } else {
                setErrMsg('Unknown Error');
            }
            errRef.current.focus();
        }
    }

  return (
    <section>
        <h1>Forgot Password</h1>
        <p> If the mail is present inside our database you will receive a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            /> <br/>
            <Button label='Send email'/>
        </form>
        <p>
            Go back to login<br />
            <span className="line">
                <Link to="/login">Login</Link>
            </span>
        </p>

    </section>
  )
}

export default ForgotPassword