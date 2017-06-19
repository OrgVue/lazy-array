"use strict"

const assert = require("assert")
const LazyArray = require("../src/LazyArray.js")

describe("LazyArray", function() {
  describe("#create", function() {
    it("should create a lazy array", function() {
      var ls = LazyArray.create(i => i + 1, 2)

      assert.strictEqual(LazyArray.get(ls)(0), 1)
      assert.strictEqual(ls[3], 1)
      assert.strictEqual(LazyArray.get(ls)(1), 2)
      assert.strictEqual(ls[3], 2)
      assert.strictEqual(LazyArray.get(ls)(1), 2)
      assert.strictEqual(ls[3], 2)
      assert.strictEqual(LazyArray.get(ls)(2), 3)
      assert.strictEqual(ls[3], 1)
      assert.strictEqual(LazyArray.get(ls)(2), 3)
      assert.strictEqual(ls[3], 1)
      assert.strictEqual(LazyArray.get(ls)(10), 11)
      assert.strictEqual(ls[3], 2)
    })
  })

  describe("#map", function() {
    it("should map a lazy array", function() {
      var ls = LazyArray.create(i => i + 1)

      ls = LazyArray.map(x => x * x)(ls)

      assert.strictEqual(LazyArray.get(ls)(1), 4)
      assert.strictEqual(LazyArray.get(ls)(10), 121)
    })
  })

  describe("#reset", function() {
    var ls = LazyArray.create()

    assert.strictEqual(LazyArray.isLazyArray(ls), true)
    ls = LazyArray.reset(ls)
    assert.strictEqual(LazyArray.isLazyArray(ls), true)
    ls = []
    assert.strictEqual(LazyArray.isLazyArray(ls), false)
  })
})
