import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Home path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
