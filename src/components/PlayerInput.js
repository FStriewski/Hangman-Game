import React, { Component } from 'react';
import './PlayerInput.css';

class PlayerInput extends Component {
  render() {
    return (
      <div className="PlayerInput">
        <input type="text" className="PlayerInputField" placeholder="Your Guess.." />
      </div>
    );
  }
}

export default PlayerInput;
