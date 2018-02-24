import React, { Component } from 'react';
import './GameContainer.css';
import PlayerInput from '../components/PlayerInput';


class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer">
        <p>This is a wrapping container</p>
        <PlayerInput />
      </div>
    );
  }
}

export default GameContainer;
