// src/reducers/word.js
//import { TYPE_LETTER } from '../actions/word'

let guessesSoFar = []
//let wrongGuessCount = 0


//export default function(state = {wordToGuess, wordHidden, guessesSoFar, wrongGuessCount}, { type, payload } = {}) {
export default function(state = {guessesSoFar}, { type, payload } = {}) {

if (type === 'TYPE_LETTER'){
  return {
    guessesSoFar: guessesSoFar.concat(payload)
  }


}

      return state

}
