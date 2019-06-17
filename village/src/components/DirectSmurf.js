import React from "react";
import axios from "axios";
import Smurf from "./Smurf";

class DirectSmurf extends React.Component {
  constructor() {
    super();
    this.state = {
      linkedSmurf: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        const id = this.props.match.params.id;
        const smurf = response.data.find(data => {
          return data.id === id;
        });
        this.setState({
          linkedSmurf: smurf
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.linkedSmurf) {
      return <div>Loading...</div>;
    }
    console.log(this.state.linkedSmurf);
    console.log(this.props.match.params.id);
    return (
      <Smurf
        deleteSmurf={this.props.deleteSmurf}
        selectSmurf={this.props.selectSmurf}
        name={this.state.linkedSmurf.name}
        height={this.state.linkedSmurf.height}
        age={this.state.linkedSmurf.age}
        id={this.state.linkedSmurf.id}
      />
    );
  }
}

export default DirectSmurf;
