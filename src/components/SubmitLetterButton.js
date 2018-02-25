import React, { PureComponent } from 'react'
import { logAttempt } from '../actions/logInput'
import { replaceLetter } from '../actions/correctGuesses'
import { countUp } from '../actions/countWrong'
import { connect } from 'react-redux'
import {wordToGuess} from './wordRepos'
import './SubmitLetterButton.css'


export class SubmitLetterButton extends PureComponent {

  handleClick = () => {
    let guess = document.getElementById('PlayerInputField').value.toUpperCase();
    this.props.logAttempt(guess)

    if (wordToGuess.includes(guess)){
      this.props.replaceLetter(guess)
    } else {
      this.props.countUp()
    }
    document.getElementById('PlayerInputField').value = ""
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


  export default connect(null, { logAttempt, replaceLetter, countUp  })(SubmitLetterButton)
