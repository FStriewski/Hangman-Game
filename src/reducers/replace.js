import {wordToGuess, wordHidden} from '../components/wordRepos'


const initialState = {
  wordToGuess,
  wordHidden,
  correctLetters : []
};


export default function(state = initialState, action = {}) {

// Takes state as object, replaces guesses with the concatenated array
  if (action.type === 'CORRECT_GUESS'){
    return {
      //...state, wordHidden: state.wordHidden.split("").map(x => wordToGuess.includes(action.payload)? "-" : action.payload)
          ...state,
         correctLetters: state.correctLetters.concat(action.payload),
      //    wordHidden: state.wordToGuess.split("").map(x => x === action.payload ? action.payload : "-"  ).join("")


    }
  }

  return state
}
