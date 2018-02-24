import React, { Component } from 'react';
import './GameContainer.css';
import Word from '../components/Word';
import PlayerInput from '../components/PlayerInput';
import Statbox from '../components/Statbox';
import SubmitLetterButton from '../components/SubmitLetterButton';


class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer">
      <Word innerHTML={this.props.wordToGuess}/>

        <div className="flex-container">
            <PlayerInput />
            <Statbox />
        </div>
        <SubmitLetterButton />
      </div>
    );
  }
}

export default GameContainer;
