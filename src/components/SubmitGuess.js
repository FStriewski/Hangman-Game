import React, { PureComponent } from 'react'
import { logAttempt } from '../actions/logInput'
import { replaceLetter } from '../actions/correctGuesses'
import { countUp } from '../actions/countWrong'
import { connect } from 'react-redux'
import {wordToGuess} from './wordRepos'
import './SubmitGuess.css'


export class SubmitGuess extends PureComponent {

  handleClick = () => {
    let guess = document.getElementById('PlayerInputField').value.toUpperCase().slice(0, 1);
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
      <div className="PlayerInput">
        <div className="SubmitLetter">Make a guess<input type="text" className="Input" id="PlayerInputField" placeholder="" onChange={this.handleClick} /></div>
      </div>
    )
  }
}

  export default connect(null, { logAttempt, replaceLetter, countUp  })(SubmitGuess)
