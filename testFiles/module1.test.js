const module1 = require('../jsFiles/module1')

describe('testing module1', () => {
    it('return result', () => {
      expect(module1.fun1(5, 6)).toBe(11)
    })
})