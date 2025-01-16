import { Component } from "react";
import styled from "styled-components";

const Heads_Image = "https://assets.ccbp.in/frontend/react-js/heads-img.png";
const Tails_Image = "https://assets.ccbp.in/frontend/react-js/tails-img.png";

class App extends Component {
  state = {
    toss_image_url: Heads_Image,
    heads: 0,
    tails: 0,
  };


  onTossCoin = () => {
    const toss = Math.floor(Math.random() * 2);

    if (toss === 0) {
      this.setState((prevState) => ({
        heads: prevState.heads + 1,
        toss_image_url: Heads_Image,
      }));
    } else {
      this.setState((prevState) => ({
        tails: prevState.tails + 1,
        toss_image_url: Tails_Image,
      }));
    }
  };
  render() {
    const { heads, tails, toss_image_url,} = this.state;
    let total = heads + tails;
    const rotateClassName = total>0 && total %2 ===0 ? "rotated":"rotates"
    
    return (
      <AppContainer>
        <CardContainer>
          <h1>Coin Toss Game</h1>
          <p>Heads or Tails</p>
          <img
            src={toss_image_url}
            alt="toss_image"
            onChange={this.onHandleClick}
            className={`image ${rotateClassName}`}
          />
          <button onClick={this.onTossCoin}>Toss Coin</button>
          <ScoreContainer>
            <p>Total : {total}</p>
            <p>Heads : {heads}</p>
            <p>Tails : {tails}</p>
          </ScoreContainer>
        </CardContainer>
      </AppContainer>
    );
  }
}
export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 100vh;
  background-image: linear-gradient(#e2a139, #f9d423);
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  background-color: white;
  height: 90vh;

  .rotated {
    animation: rotate-up-down 2s;
  }
  @keyframes rotate-up-down {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(150deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .rotates {
    animation: rotate-down-up 2s;
  }
  @keyframes rotate-down-up {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(160deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  img {
    height: 300px;
    width: 300px;
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  padding: 10px;
  p {
    margin: 10px;
  }
`;
