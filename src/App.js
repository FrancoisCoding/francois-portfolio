import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="Application">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
