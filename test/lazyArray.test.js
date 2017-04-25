"use strict"

const assert = require("assert")
const lazyArray = require("../src/lazyArray.js")

describe("lazyArray", function() {
  describe("#create", function() {
    it("should create a lazy array", function() {
      var ls = lazyArray.create(i => i + 1, 2)

      assert.strictEqual(lazyArray.get(ls)(0), 1)
      assert.strictEqual(ls[3], 1)
      assert.strictEqual(lazyArray.get(ls)(1), 2)
      assert.strictEqual(ls[3], 2)
      assert.strictEqual(lazyArray.get(ls)(1), 2)
      assert.strictEqual(ls[3], 2)
      assert.strictEqual(lazyArray.get(ls)(2), 3)
      assert.strictEqual(ls[3], 1)
      assert.strictEqual(lazyArray.get(ls)(2), 3)
      assert.strictEqual(ls[3], 1)
      assert.strictEqual(lazyArray.get(ls)(10), 11)
      assert.strictEqual(ls[3], 2)
    })
  })

  describe("#map", function() {
    it("should map a lazy array", function() {
      var ls = lazyArray.create(i => i + 1)

      ls = lazyArray.map(x => x * x)(ls)

      assert.strictEqual(lazyArray.get(ls)(1), 4)
      assert.strictEqual(lazyArray.get(ls)(10), 121)
    })
  })
})
