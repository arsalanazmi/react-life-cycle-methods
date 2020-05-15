import Parent from "./Component/Parent";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      parent: true
    }
  }
  deleteComponent = () => {
    this.setState({
      parent: false
    });
  };
  render() {
    let Component;
    if (this.state.parent) {
      Component = <Parent favColor="Silver"/>;
    };
    return (
      <div className="Parent">
      {Component}
      <button type="button" onClick={this.deleteComponent}>Delete Component</button>
      </div>
    );
  }
}