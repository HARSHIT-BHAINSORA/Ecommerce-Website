import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";

function App() {
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
