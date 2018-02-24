import React, { Component } from 'react';
import './PlayerInput.css';

class PlayerInput extends Component {
  render() {
    return (
      <div className="PlayerInput">
        <h3> Your guess: </h3>
        <input type="text" className="Input" id="PlayerInputField" placeholder="?" />
      </div>
    );
  }
}

export default PlayerInput;
