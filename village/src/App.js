import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";

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

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));
  };
  //this takes an id from Smurfs and sends a delete request to the server for the smurf matching that id. Then updates our state with the new data.

  putSmurf = (id, updatedSmurf) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <header>
          <NavLink exact to="/">
            Smurf List
          </NavLink>
          <NavLink to="/smurf-form">Modify Smurfs</NavLink>
        </header>
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} postSmurf={this.postSmurf} />}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          exact
          path="/:id"
          render={props => (
            <Smurf
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
