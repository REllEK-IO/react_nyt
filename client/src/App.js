import React from "react";
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";

import Articles from "./components/utils/articlesHelper";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {"savedArray" : true};
  }
  getSavedArticles(){
    //Get saved articles code
    Articles.get((res) =>{
      return (
        <Saved savedArray={res} />
      );
    })
  }

  render(){
    return(
      <Router>
      <Switch>
          <Route exact path="/" children={() => 
            <div>
              <Navbar />
              <br />
              <Search />
              <br />
              {this.getSavedArticles()}
            </div>
          }/>
          <Route path="/result" children={() => 
            <div>
              <Navbar />
              <br />
              <Search />
              <br />
              <Results />
              <br />
              <Saved savedArray={this.state.savedArray}/>
            </div>
          }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
