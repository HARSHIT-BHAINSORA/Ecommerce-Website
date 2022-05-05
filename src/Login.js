import React, {useState} from 'react';
import './Login.css';
import {Link} from "react-router-dom";

function Login() {

  const [email , setEmail] = useState('');
  const[password , setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();
  }

  const register = e =>{
    e.preventDefault();
  }
  return (
    <div className='login'>
        <Link to="/">
        <img className='login_logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt=""/>
        </Link>

    
        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text'  value = {email} 
                onchange={e=>setEmail(e.target.value)}/>
                {/* if user input the email every time event happen and target to it update the content inside the value */}

                <h5>Password</h5>
                <input type='password' value = {password}
                onchange = {e => setPassword(e.target.value)}/>
                
                <button className='login_signinButton' type ='submit' 
                onclick= {signIn} >Sign In</button>
            </form>

            <p>
                By siging-in you agree to the Amazon conditions
                of Use & Sale .Please see Privacy Notice, our Cookies
                Notice and our Interent-Based Ads Notice.              
            </p>

            <button className="login_registerButton" onclick={register}
            >Create your Amazom Account</button>
        </div>
    </div>
  )
}

export default Login