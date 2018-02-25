import {wordToGuess, wordHidden} from '../components/wordRepos'


const initialState = {
  wordToGuess,
  wordHidden
};


export default function(state = initialState, action = {}) {

// Takes state as object, replaces guesses with the concatenated array
  if (action.type === 'CORRECT_GUESS'){
    return {
      //...state, wordHidden: state.wordHidden.split("").map(x => wordToGuess.includes(action.payload)? "-" : action.payload)
          ...state, wordHidden: state.wordToGuess.split("").map(x => x === action.payload ? action.payload : "-"  ).join("")
  
      //console.log(action.payload)
    }
  }

  return state
}
