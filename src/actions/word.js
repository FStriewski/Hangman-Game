// Action Creator

import { TYPE_LETTER } from './types'

export const guessWord = (guess) => {
  console.log(guess)

  return {
    type: TYPE_LETTER,
    payload:  guess
  }
}
