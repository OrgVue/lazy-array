const LazyArray = (f, max) => {
  const raw = {
    type: "LazyArray",
    count: 0,
    data: [],
    f: f,
    max: max || 1e6
  }

  return op => (typeof op === "function" ? op(raw) : get(raw, op))
}

const get = (raw, i) => {
  if (raw.data[i] === undefined) {
    if (raw.count >= raw.max) {
      raw.data = []
      raw.count = 0
    }

    raw.data[i] = raw.f(i)
    raw.count++
  }

  return raw.data[i]
}

const clone = fold => fold(raw => LazyArray(raw.f, raw.max))

module.exports = {
  LazyArray: LazyArray,
  clone: clone
}
