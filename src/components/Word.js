
import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'
import {wordToGuess, wordHidden} from './wordRepos'


class Word extends Component {

  checker(word){
    let wordToGuess = "test"//generateWord();
    let wordHidden = wordToGuess.split("").map(x => x = "-").join("")
    let wordArray = wordToGuess.split("")
    let puzzleWord = wordArray.map(x => word.indexOf(x) < 0 ? "_" : x).join("");
    console.log(wordHidden, wordArray, puzzleWord )
  }

  render() {
    return (
      <div className="Word">
      {wordToGuess}<br/>
      {wordHidden}
      </div>
    );
  }
}

const mapStateToProps = ({ word }) => ({ word })
export default connect(mapStateToProps, {})(Word)
