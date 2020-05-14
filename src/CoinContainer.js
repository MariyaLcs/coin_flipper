import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "head",
        imgSrc:
          "https://www.chards.co.uk/media/blog/57/2016-One-Pound-Coin.jpg",
      },
      {
        side: "tail",
        imgSrc:
          "https://chards.s3.eu-west-2.amazonaws.com/products/1519/main/1983-base-metal-ordinary-circulation-royal-coat-of-arms-1-coin-single-united-kingdom-the-royal-mint-loose-1.jpg",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
      currCoin: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "head" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tail" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  counter() {}

  render() {
    return (
      <div className="CoinContainer">
        <h2>Lets Flip a COIN!!!</h2>
        {this.state.currCoin && <Coin data={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip me!</button>
        <h3>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </h3>
      </div>
    );
  }
}

export default CoinContainer;
