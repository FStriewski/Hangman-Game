import React, { Component } from 'react';
import './GameContainer.css';
import PlayerInput from '../components/PlayerInput';
import Statbox from '../components/Statbox';


class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer">
        <p>This is a wrapping container!</p>
        <Statbox />
        <PlayerInput />
      </div>
    );
  }
}

export default GameContainer;
