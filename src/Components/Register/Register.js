import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className ="login-form">
            <div>
                <h2>Create account</h2>
                <form >
                    <input type="text" name="name" id="" placeholder="Enter your name" />
                    <br />
                    <input type="email" name="email" id="" placeholder="Enter Your Email"/>
                    <br />
                    <input type="password" name="password" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit"/>

                </form>

                <div>===========or==============</div>
                <button className="regular-btn">Google Sign In</button>

                <p>Already have an account? <Link to="login">Sign-In</Link></p>
            </div>
        </div>
    );
};

export default Register;