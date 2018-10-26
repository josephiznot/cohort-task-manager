import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddCohort from "./components/AddCohort";

class App extends Component {
  state = {
    cohortVisible: false,
  };

  toggleVisibility = () => {
    this.setState({ cohortVisible: !this.state.cohortVisible });
  };

  render() {
    const { cohortVisible } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cohort Task Manager</h1>
        </header>

        {
          cohortVisible
          ? <AddCohort toggleVisibility={this.toggleVisibility} />
          : <button onClick={this.toggleVisibility}>Add Cohort</button>
        }

      </div>
    );
  }
}

export default App;
