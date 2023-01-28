const { sum, multiplication } = require('../jsFiles/module1')

describe('testing module1 functions', () => {
  test('return sum result', () => {
    expect(sum(5, 6)).toBe(11)
  })

  test('return multiplication result', () => {
    expect(multiplication(5, 6)).toBe(30)
  })
})