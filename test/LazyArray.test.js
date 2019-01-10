"use strict"

const assert = require("assert")
const { LazyArray, test } = require("../src/LazyArray.js")

describe("LazyArray", function() {
  describe("#ctor", function() {
    it("should create a lazy array", function() {
      var la = LazyArray(i => i + 1, 2)

      const count = la => la(raw => raw.count)

      assert.strictEqual(la(0), 1)
      assert.strictEqual(count(la), 1)
      assert.strictEqual(la(1), 2)
      assert.strictEqual(count(la), 2)
      assert.strictEqual(la(1), 2)
      assert.strictEqual(count(la), 2)
      assert.strictEqual(la(2), 3)
      assert.strictEqual(count(la), 1)
      assert.strictEqual(la(2), 3)
      assert.strictEqual(count(la), 1)
      assert.strictEqual(la(10), 11)
      assert.strictEqual(count(la), 2)
    })
  })
})
