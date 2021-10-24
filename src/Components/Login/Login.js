import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";
    
    const handelGoogleSignIn = () => {

        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                history.push(redirect_url)
            }).catch(error => console.log(error.message))
    }

    return (
        <div className="login-form">
            <div>
                <h2>Sign In</h2>
                <form >
                    <input type="email" name="email" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Login" />

                </form>

                <div>===========or==============</div>
                <button onClick={handelGoogleSignIn} className="regular-btn">Google Sign In</button>

                <p>New to here? <Link to="register">Register Now</Link></p>
            </div>
        </div>
    );
};

export default Login;