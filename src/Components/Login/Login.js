import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div className ="login-form">
            <div>
                <h2>Sign In</h2>
                <form onSubmit ="">
                    <input type="email" name="email" id="" placeholder="Enter Your Email"/>
                    <br />
                    <input type="password" name="password" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Login"/>

                </form>

                <div>===========or==============</div>
                <button className="regular-btn">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;