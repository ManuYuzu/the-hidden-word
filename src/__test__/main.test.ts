import { hiddenWord, MAX, MIN } from '../main'

describe('To check every input on hiddenWord function', () => {

  it('To check the value of 619', () => expect(hiddenWord(619)).toBe('abm'))

  it('To check if a value under 100 works', () => expect(() => {
    return hiddenWord(99)
  }).toThrow('The input is not valid'))

  it('To check if a value under 999999 works', () => expect(() => {
    return hiddenWord(19123129)
  }).toThrow('The input is not valid'))

  it('Expects', () => expect({ "name": "test", "number": 27 }).toEqual({ "name": "test", "number": 27 }))

  describe('Random Value test', () => {

    let randomCode:number
    beforeEach(() => randomCode = Math.floor(Math.random() * (MAX - MIN + 1) + MIN))

    it('The text should be returned in lower case', () => {
      
      expect(hiddenWord(randomCode)).toBe(hiddenWord(randomCode).toLowerCase())
    })

    it('The text may not contain spaces', () => {
      expect(hiddenWord(randomCode)).toBe(hiddenWord(randomCode).split(' ').join())
    })
  })
})
