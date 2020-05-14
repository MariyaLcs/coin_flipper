import React, { Component } from "react";

class Coin extends Component {
  render() {
    return <div>{this.props.face}</div>;
  }
}

export default Coin;
