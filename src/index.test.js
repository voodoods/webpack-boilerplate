import { addNumbers } from './index'

describe('addNumbers', () => {
  it('adds two numbers', () => {
    const actual = addNumbers(4, 3)
    expect(actual).toEqual(7)
  })
})
