import React, { Component } from "react";

class AddCohort extends Component {
  state = {
    cohortName: "",
    startDate: "",
    today: {},
    ninetyDays: {},
    dates: []
  };
  addCohort = () => {
    console.log("Submitting...", ...this.state);
    this.props.toggleVisibility();
  };
  getDates = (date, newDates) => {
    if (date < this.state.ninetyDays) {
      let nextDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1
      );
      newDates.push(nextDay);
      return this.getDates(nextDay, newDates);
    }
    return newDates;
  };
  componentDidMount() {
    let today = new Date();
    let ninetyDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 90
    );
    this.getDates(today, []);
    this.setState({
      ninetyDays: ninetyDays,
      today: today
    });
  }
  render() {
    console.log(this.state.dates);
    const mappedDates = this.state.dates.map(e => {
      console.log(e);
      return <option key={e} value={("" + e).slice(0, 10)} />;
    });
    return (
      <div className="addcohort-container">
        <h2>ADD COHORT</h2>
        <input
          placeholder="Cohort"
          onChange={e => this.setState({ cohortName: e.target.name })}
        />
        <select>{mappedDates}</select>
        <button onClick={() => this.addCohort()}>ADD</button>
      </div>
    );
  }
}

export default AddCohort;
