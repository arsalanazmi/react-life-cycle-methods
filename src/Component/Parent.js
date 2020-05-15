import React, { Component } from "react";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteColor: "Red"
    };
    console.log(`Constructor
    Initial State: ${this.state.favouriteColor}`);
  }

  // Note:Run code with commiting getDerivedStateFromProps & without commiting getDerivedStateFromProps

  // static getDerivedStateFromProps(props, state) {
  //   console.log(`getDerivedStateFromProps
  //   Props: ${props.favColor}
  //   State: ${state.favouriteColor}`);
  //   return {
  //     favouriteColor: props.favColor
  //   };
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate
    Next Props: ${nextProps.favColor}
    Next State: ${nextState.favouriteColor}
    Current State: ${this.state.favouriteColor}`);
    return true;
  }

  changeColor = () => {
    this.setState({
      favouriteColor: "Blue"
    });
  };

  componentDidMount() {
    console.log("ComponentDidMount");

    setTimeout(() => {
      this.setState({
        favouriteColor: "Green"
      });
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`Parent getSnapshotBeforeUpdate 
    Previous State:  ${prevState.favouriteColor}
    Previous Props:  ${prevProps.favColor}
    Current State: ${this.state.favouriteColor}`);

    if (prevState !== this.state.favouriteColor) {
      return (document.getElementById("p1").innerHTML =
        "Before Update favourite Color was: " + prevState.favouriteColor);
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(`componentDidUpdate
    Previous Props: ${prevProps.favColor}
    Previous State: ${prevState.favouriteColor}
    SnapShot: ${snapShot}
    Updated State: ${this.state.favouriteColor}`);

    document.getElementById("p2").innerHTML =
      "The updated favourite color is: " + this.state.favouriteColor;
  }

  componentWillUnmount() {
    alert("componentWillUnmount");
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>My favourite color is : {this.state.favouriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
        <p id="p1"></p>
        <p id="p2"></p>
      </div>
    );
  }
}