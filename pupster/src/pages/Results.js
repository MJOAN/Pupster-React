import React, { Component } from "react";
import API from "../utils/API";
import Alert from "../components/Alert";
import Main from "../components/Main"

class Results extends Component {
  state = {
    topic: "",
    results: false  
  };


  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
  };

  render() {
    return (
      <div>
      <Main backgroundImage="">
        <h1>New York Times Article Scraper!</h1>
      </Main>
        <h1 className="text-center">Results</h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          This article has been saved!
        </Alert>
      </div>
    );
  }
}

export default Results;
