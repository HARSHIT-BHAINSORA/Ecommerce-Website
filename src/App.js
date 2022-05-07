import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {

  const [{user} , dispatch] = useStateValue();

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
          <Route path = "/login">
            <Login />
          </Route>
          
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
