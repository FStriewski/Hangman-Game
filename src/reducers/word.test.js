import word from './word'

describe('word reducer', () => {
  const reducer = word
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
