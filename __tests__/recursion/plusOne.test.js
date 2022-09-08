const { plusOne1 } = require('../../recursion/plusOne')

describe ('plusOne1', () => {
  it('works on [9,9,9]', () => {
    expect(plusOne1([9,9,9])).toEqual([1,0,0,0])
  })
})