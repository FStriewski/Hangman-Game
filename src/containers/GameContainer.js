import React, { Component } from 'react';
import './GameContainer.css';
import Word from '../components/Word';
import Statbox from '../components/Statbox';
import SubmitGuess from '../components/SubmitGuess';


class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer">
      <Word innerHTML={this.props.wordToGuess}/>

        <div className="flex-container">
            <Statbox />
            <SubmitGuess />
        </div>

      </div>
    );
  }
}

export default GameContainer;
