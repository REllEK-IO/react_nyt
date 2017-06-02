import React from "react";
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Results from "./components/Results";

const App = () => (
  <Router>
    <Switch>
        <Route exact path="/" children={() => 
          <div>
            <Navbar />
            <br />
            <Search />
          </div>
        }/>
        <Route path="/result" children={() => 
          <div>
            <Navbar />
            <br />
            <Search />
            <br />
            <Results />
          </div>
        }/>
      </Switch>
    </Router>
);

export default App;