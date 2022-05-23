import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Footer from "./Footer";
import Payment from "./Payment";
import{loadStripe} from "@stripe/stripe-js";
import{Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe(
  'pk_test_51L12qnSH7cdoaxz3B2iWLtszfSxQZza2dY0qng9rMlPDqqS3o4BQuRBEuYWnxqAxchD0tHiRVSDPO4A49za3tALV00HTuzDtTr'
  );

function App() {

  const [ {user} ,dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >> " , authUser);
      
      if(authUser){

        dispatch({
          type :'SET_USER',
          user : authUser,
        });
        // the user just logged in 
      }else 
      {
        dispatch({
          type : 'SET_USER',
          user : null
        })
        // user logged out 
      }
      
    })
      // will only run once when the app component loads
  },[])
  return (
    <Router>
      <div className="App">
      
      <Switch>
          
          <Route path = "/orders">
            <Header />
            <Orders />
            <Footer/>
          </Route>
            
          <Route path = "/login">
            <Login />
          </Route>
          
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer/>
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe = {promise}>
              <Payment />
            </Elements>  
          </Route>


          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
