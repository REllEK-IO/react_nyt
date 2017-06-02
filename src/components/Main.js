import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import '../App.css';

// // Import sub-components
// import Form from "./children/Form";
// import Results from "./children/Results";
import Navbar from "./children/Navbar";
import Search from "./children/Search";

// // Helper Function
// import helpers from "./utils/helpers";

class Main extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      "pageTitle":"React NYT Search",
      "results" : []
    }
    // this.state = {
    //   searchTerm: "",
    //   results: ""
    // };

    // this.setTerm = this.setTerm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    // if (prevState.searchTerm !== this.state.searchTerm) {
    //   console.log("UPDATED");

    //   helpers.runQuery(this.state.searchTerm).then((data) => {
    //     if (data !== this.state.results) {
    //       console.log(data);

    //       this.setState({ results: data });
    //     }
    //   });
    // }
  }

  // setTerm(term) {
  //   this.setState({
  //     searchTerm: term
  //   });
  // }

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" children={() => 
            <div>
              <Navbar pageTitle={this.state.pageTitle} />
              <br />
              <Search />
            </div>
          }/>
          <Route path="/result" children={() => 
            <div>
              <Navbar pageTitle={this.state.pageTitle} />
              <br />
              <Search />
            </div>
          }/>
        </Switch>   
      </Router>
    );
  }
}

// Export the component back for use in other files
export default Main;
