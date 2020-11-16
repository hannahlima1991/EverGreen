import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/NavBar";
import Sativa from "./components/Sativa";
import Indica from "./components/Indica";
import Hybrid from "./components/Hybrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sativas" exact component={Sativa} />
          <Route path="/indicas" exact component={Indica} />
          <Route path="/hybrids" exact component={Hybrid} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
