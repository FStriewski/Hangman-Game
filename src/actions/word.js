// Action Creator
import Word from '../components/Word';
import { TYPE_LETTER } from './types'

export const guessWord = (guess) => {

  let wordArray = this.props.wordToGuess.split("")
  let puzzleWord = wordArray.map(x => guess.indexOf(x) < 0 ? "_" : x).join("");


  return {
    type: TYPE_LETTER,
    payload: {
      puzzleWord
    }
  }
}
