// Action Creator

import { TYPE_LETTER } from './types'

export const guessWord = guess => ({
    type: TYPE_LETTER,
    payload:  guess

});
