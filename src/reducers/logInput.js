// src/reducers/word.js
//import { TYPE_LETTER } from '../actions/word'


//let wrongGuessCount = 0
const initialState = {
  guessesSoFar: []
};

//export default function(state = {wordToGuess, wordHidden, guessesSoFar, wrongGuessCount}, { type, payload } = {}) {
export default function(state = initialState, action = {}) {

// Takes state as object, replaces guesses with the concatenated array
  if (action.type === 'A_LETTER'){
    return {
      ...state, guessesSoFar: state.guessesSoFar.concat(action.payload)
    }
  }

  return state
}


//
/*
let state = {a: "222", guessesSoFar : []}

function test (x){
  return {
    ...x, guessesSoFar: 2
  }
}

test(state)
*/
