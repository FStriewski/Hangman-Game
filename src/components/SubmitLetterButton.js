import React, { PureComponent } from 'react'
import { guessWord } from '../actions/word'
import { connect } from 'react-redux'
import './SubmitLetterButton.css'

export class SubmitLetterButton extends PureComponent {

  handleClick = () => {
    let guess = document.getElementById('PlayerInputField').value;
    this.props.guessWord(guess)
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


  export default connect(null, { guessWord })(SubmitLetterButton)
