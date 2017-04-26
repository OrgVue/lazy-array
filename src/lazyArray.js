// lazy-array

"use strict"

// create :: (Number -> a) -> Number -> LazyArray a
const create = (f, max) => [[], f, max || 1E6, 0]

// get :: LazyArray a -> Number -> a
const get = ls => i => {
  if (ls[0][i] === undefined) {
    if (ls[3] >= ls[2]) { 
      ls[0] = []
      ls[3] = 0
    }

    ls[0][i] = ls[1](i)
    ls[3]++
  }

  return ls[0][i]
}

// map :: (a -> b) -> LazyArray a -> LazyArray b
const map = f => ls => create(i => f(get(ls)(i)))

// reset :: LazyArray a -> LazyArray a
const reset = ls => [[], ls[1], ls[2], 0]

// Exports
module.exports = {
  create: create,
  get: get,
  map: map,
  reset: reset
}
