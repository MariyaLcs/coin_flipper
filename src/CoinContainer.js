import React, { Component } from "react";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    face: "head",
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ face: "no head" });
  }

  counter() {}
  render() {
    return (
      <div>
        <h1>Lets Flip a coin</h1>
        <Coin face={this.props.face} />
        <button onClick={this.handleClick}>Flip me!</button>
      </div>
    );
  }
}

export default CoinContainer;
