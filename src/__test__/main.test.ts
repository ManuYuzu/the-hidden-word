import { hiddenWord } from '../main'

const chai = require('chai')
const assert = chai.assert

chai.config.truncateThreshold = 0

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(hiddenWord(637), "aid")
    assert.strictEqual(hiddenWord(7415), "debt")
    assert.strictEqual(hiddenWord(49632), "email")
    assert.strictEqual(hiddenWord(942547), "melted")
  })
})