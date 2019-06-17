import React from "react";

const Smurf = props => {
  const removeSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
  };

  const chooseSmurf = e => {
    e.preventDefault();
    props.selectSmurf(props);
  };
  //takes in our deleteSmurf method from App and passes in the selected smurf's id so it can be deleted.

  return (
    <div className="Smurf" onClick={chooseSmurf}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={removeSmurf}>Delete Smurf</button>
    </div>
  );
};

/*Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};
*/
export default Smurf;
