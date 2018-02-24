// Action Creator

import { TYPE_LETTER } from './types'
export const guessWord = (wordHidden) => {
  //const [board, locked] = fillBoard(rows)
  return {
    type: TYPE_LETTER,
    payload: {
      wordHidden
    }
  }
}
