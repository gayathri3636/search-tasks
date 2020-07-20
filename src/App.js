import React from "react";
import "./App.css";
import NamesContainer from "./NamesContainer";

class App extends React.Component {
  state = {
    names: [
      "John",
      "Abigail",
      "Gayathri",
      "Hima",
      "Deepthi",
      "jaanu",
      "Andrew",
      "Abhi",
      "Gagan",
    ],
    searchTerm: "",
  };

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  dynamicSearchTerm = (e) => {
    return this.state.names.filter((name) =>
      name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "30vh" }}>
        <input
          type="text"
          value={this.state.searchTerm}
          placeholder="search for a name"
          onChange={this.editSearchTerm}
        />
        <br />
        <h3>These are important names:</h3>
        <NamesContainer names={this.dynamicSearchTerm()} />
      </div>
    );
  }
}
export default App;
