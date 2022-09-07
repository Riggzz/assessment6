const {shuffleArray} = require('./utils')


const testArr1 = [1,2,3,4]
const arr2 = []
const arr3 = ['this', 'should', 'be', 'shuffled']

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(arr2))).toBe(true)
        expect(Array.isArray(shuffleArray(arr3))).toBe(true)
    })

    test('have its output array have the same length as its input', () => {
        expect(shuffleArray(arr2)).toHaveLength(arr2.length)
        expect(shuffleArray(arr3)).toHaveLength(arr3.length)
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
    })
})