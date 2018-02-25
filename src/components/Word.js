
import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'
//import {wordToGuess, wordHidden} from './wordRepos'

//{shownToPlayer.map(x => x === action.payload ? action.payload : "-"  ).join("")}

class Word extends Component {


  render() {

    let wordHidden = this.props.replace.wordHidden
    let wordToGuessArray = this.props.replace.wordToGuess.split("")
    let allGuesses = this.props.replace.correctLetters

    let display = wordToGuessArray.map(x => allGuesses.indexOf(x) < 0 ? "_" : x);


    return (
      <div className="Word">
      {wordToGuessArray}<br/>
      {display}
      <br/>

      </div>
    );
  }
}

const mapStateToProps = ({ replace }) => ({ replace })
export default connect(mapStateToProps, {})(Word)
