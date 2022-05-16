import React, {useState} from 'react';
import './Login.css';
import {Link , useHistory} from "react-router-dom";
import { auth } from "./firebase";

function Login() {

  const history = useHistory(); // change the url
  const [email , setEmail] = useState("");
  const[password , setPassword] = useState("");

  const signIn = e =>{
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email , password)
    .then(auth => {
      history.push('/')
    })
    .catch(error =>alert(error.message))
  }

  const register = e =>{
    // if enter the detail and dydefault page is refresed so data is loss here.
    // to prevent it we use this.
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email , password)
    .then((auth) => {
      // it successfully create an account .
      console.log(auth);
      if(auth)
      {
        history.push('/');
      }
    })
    .catch(error => alert(error.message))
  };

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
                <input  
                value = {email}
                onChange={(e)=>setEmail(e.target.value)}
                type = "email"
                />
                {/* if user input the email every time event happen and target to it update the content inside the value */}

                <h5>Password</h5>
                <input
                value = {password} 
                type='password' 
                onChange = {e => setPassword(e.target.value)}/>
                
                <button className='login_signinButton' type ='submit' 
                onClick= {signIn} >Sign In</button>
            </form>

            <p>
                By siging-in you agree to the Amazon conditions
                of Use & Sale .Please see Privacy Notice, our Cookies
                Notice and our Interent-Based Ads Notice.              
            </p>

            <button className="login_registerButton" onClick={register}
            >Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login