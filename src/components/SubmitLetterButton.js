import React, { PureComponent } from 'react'
import { guessWord } from '../actions/word'
import './SubmitLetterButton.css'

export class SubmitLetterButton extends PureComponent {

  handleClick = () => {
    let guess = document.getElementById('total-count');
    this.props.guessWord(guess)
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="SubmitLetterButton"
      >
        Submit Letter
      </button>
    )
  }
  }

export default SubmitLetterButton
