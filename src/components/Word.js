
import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'
//import {wordToGuess, wordHidden} from './wordRepos'

//{shownToPlayer.map(x => x === action.payload ? action.payload : "-"  ).join("")}

class Word extends Component {


  render() {

    let wordHidden = this.props.correctGuesses.wordHidden
    let wordToGuessArray = this.props.correctGuesses.wordToGuess.split("")
    let allGuesses = this.props.correctGuesses.correctLetters

    let display = wordToGuessArray.map(x => allGuesses.indexOf(x) < 0 ? "_" : x);

//{wordToGuessArray}
    return (
      <div className="Word">
      <br/>
      {display}
      <br/>

      </div>
    );
  }
}

const mapStateToProps = ({ correctGuesses }) => ({ correctGuesses })
export default connect(mapStateToProps, {})(Word)
