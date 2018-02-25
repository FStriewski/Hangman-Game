import React, { PureComponent } from 'react'
import { guessWord } from '../actions/word'
import { replaceLetter } from '../actions/replace'
import { connect } from 'react-redux'
import {wordToGuess, wordHidden} from './wordRepos'
import './SubmitLetterButton.css'

export class SubmitLetterButton extends PureComponent {

  handleClick = () => {
    let guess = document.getElementById('PlayerInputField').value.toUpperCase();

    if (wordToGuess.includes(guess)){

      this.props.guessWord(guess)
      this.props.replaceLetter(guess)
    } else {
      // (I)add to wrong attempts
      document.getElementById('wrong_attempts').innerHTML += "I"
    }
    // reset field
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


  export default connect(null, { guessWord, replaceLetter  })(SubmitLetterButton)
