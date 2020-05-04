import React from 'react';
import './login.css';

function Login(){
    return(

        <div className="login-content d-flex align-itens-center">


            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 text-white font-weight-normal">Login</h1>
                </div>

                <div className="form-label-group">
                    <input type="email" id="inputEmail" class="form-control my-2" placeholder="Email address" />
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" class="form-control my-2" placeholder="Password" />
                </div>

                {/*
                <div className="checkbox mb-3"> 
                    <label><input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                */} 
                
                <button className="btn btn-lg btn-login btn-block my-2" type="submit">Sign in</button>
                <div className="signin-message text-white text-center my-4">
                    <span><strong>Whoah!</strong> You are signed in! &#128526;</span>
                    <span><strong>Oops, sorry!</strong> E-mail or password incorrect! &#128546;</span>
                </div>

                <div className="login-options text-center mt-5">
                    <button className="btn btn-signup btn-block" type="submit">Sign Up</button>
                    <a href="http://192.168.15.9:3000/">Password recovery</a>
                </div>
                

                <p className="mt-5 mb-3 text-muted text-center">&copy; 2020</p>
            </form>
        </div>
    );
}

export default Login;