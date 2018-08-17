import React, { Component } from "react";

class AddCohort extends Component {
  state = {
    cohortName: "",
    next90: [],
    selected: ""
  };
  addCohort = () => {
    console.log("subitting...", this.state);
    this.props.toggleVisibility();
  };
  nthDay = (n, initialDay) => {
    let day = initialDay || new Date();
    return new Date(day.getFullYear(), day.getMonth(), day.getDate() + n);
  };
  getNext90 = (arr, cur) => {
    arr = arr || [];
    cur = cur || new Date();
    if (cur < this.nthDay(90)) {
      arr.push(cur);
      return this.getNext90(arr, this.nthDay(1, cur));
    }

    this.setState({ next90: arr });
  };
  handleChange = target => {
    this.setState({ [target.name]: target.value });
  };
  componentDidMount() {
    this.getNext90();
  }
  render() {
    let mapped90 = this.state.next90.map(e => {
      return (
        <option value={e + ""} key={e}>
          {(e + "").slice(0, 10)}
        </option>
      );
    });
    return (
      <div className="addcohort-container">
        <h2>ADD COHORT</h2>
        <input
          placeholder="Cohort"
          name="cohortName"
          onChange={e => this.handleChange(e.target)}
        />
        <select name="selected" onChange={e => this.handleChange(e.target)}>
          {mapped90}
        </select>
        <button onClick={() => this.addCohort()}>ADD</button>
      </div>
    );
  }
}

export default AddCohort;
