import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    if (this.props.selectedSmurf !== null) {
      this.setState({
        name: this.props.selectedSmurf ? this.props.selectedSmurf.name : "",
        age: this.props.selectedSmurf ? this.props.selectedSmurf.age : "",
        height: this.props.selectedSmurf ? this.props.selectedSmurf.height : "",
        isUpdating: this.props.selectedSmurf ? true : false
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSmurf.id !== prevProps.selectedSmurf.id) {
      this.setState({
        name: this.props.selectedSmurf ? this.props.selectedSmurf.name : "",
        age: this.props.selectedSmurf ? this.props.selectedSmurf.age : "",
        height: this.props.selectedSmurf ? this.props.selectedSmurf.height : "",
        isUpdating: this.props.selectedSmurf ? true : false
      });
    }
  }
  addSmurf = e => {
    e.preventDefault();
    // add code to create the smurf using the api
    this.props.postSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push("/");
    //sends our state(equal to our entered smurf data) as an object to the postSmurf method on App. Then sets the state of SmurfForm to clear the inputs. And finally sends us back to the smurf list so we can see that the addition of our new smurf has been a success.
  };

  updateSmurf = e => {
    e.preventDefault();
    this.props.putSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form
          onSubmit={this.state.isUpdating ? this.updateSmurf : this.addSmurf}
        >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">
            {this.state.isUpdating ? "Update Smurf" : "Add Smurf"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
