const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
 expect(shuffleArray).toContain('milk');
 expect(new Set(shuffleArray)).toBeFalsy
})