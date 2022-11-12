const {shuffleArray} = require('./utils')

const { bots } = require("./data");

const rogueRobots = [
    'wall-e',
    'eve',
    'stylist-robot'
]

describe('shuffleArray should', () => {
    test('sample test', () => {
        expect(1).toBe(1)
    })

    test('contain rogue robots', () =>{
          let result = shuffleArray(rogueRobots)
          expect(Array.isArray(result)).toBeTruthy()
          
    })
    test('bots are in this array', ()=> {
        expect(shuffleArray(bots)).toContain(bots[1])
    })

   
})