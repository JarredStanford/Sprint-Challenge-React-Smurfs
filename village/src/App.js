import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));
  }
  //this makes a call to our server and uses the dataset from the response to set our state.

  postSmurf = newSmurf => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));
  };
  //this sends our new smurf data as an argument to post to the server. It then sets state on App to update our state with the new smurf added.

  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <SmurfForm postSmurf={this.postSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
