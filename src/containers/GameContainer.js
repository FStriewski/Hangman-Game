import React, { Component } from 'react';
import './GameContainer.css';
import PlayerInput from '../components/PlayerInput';
import Statbox from '../components/Statbox';


class GameContainer extends Component {
  render() {
    return (
      <div className="GameContainer">
        <div className="flex-container">
            <PlayerInput />
            <Statbox />
        </div>
      </div>
    );
  }
}

export default GameContainer;
