import word from './word'

describe('word reducer', () => {
  const reducer = word
  const initialState = "testword"

  it('returns an word for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
