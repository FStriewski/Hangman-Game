import React, { Component } from 'react';
import './Word.css';
import { connect } from 'react-redux'


let generateWord = (function(){
  let generated = false
  return function(){
    if (!generated) {
      generated = true

      let sentence = "depiction of a large writhing naked woman, whose prominent pudendum would be only more evident when viewed from below saw him accused of pornography and the public prosecutor was called Although the ministry stood by him when Jurisprudence which featured a penitent encircled by a formless squidlike creature caused further disquiet a decision was made to permanently display the paintings in a gallery"

      let wordList = sentence
        .split(" ")
        .filter(x => x.length > 5)

      let randomIndex = Math.floor(Math.random()* wordList.length)

      return wordList[randomIndex]
    }
  }
})();

//const wordToGuess = generateWord();
//const wordHidden = wordToGuess.split("").map(x => x = "-").join("")


class Word extends Component {

  checker(word){
    const wordToGuess = generateWord();
    let wordHidden = this.wordToGuess.split("").map(x => x = "-").join("")

    let wordArray = wordToGuess.split("")
    let puzzleWord = wordArray.map(x => word.indexOf(x) < 0 ? "_" : x).join("");
  }

  render() {

  const wordToGuess = generateWord();



  console.log(wordToGuess)
    return (
      <div className="Word">
      {wordToGuess}
      {this.props.word.wordHidden}
      {this.props.word.guessesSoFar}
      </div>
    );
  }
}
/*
const mapStateToProps = (state) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    word: state.wordToGuess,
    //wordHidden: state.wordHidden
  }
}
*/
// Then pass it to connect:
const mapStateToProps = ({ word }) => ({ word })
export default connect(mapStateToProps, {})(Word)
