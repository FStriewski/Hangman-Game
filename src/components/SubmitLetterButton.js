import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './SubmitLetterButton.css'

export class SubmitLetterButton extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.createGame(6)
  }

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
