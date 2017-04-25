# lazy-array

A lazy array, which has fast random access.

## Usage

```javascript
const lazyArray = require("lazy-array")

var integers = lazyArray.create(i => i + 1) // [1, 2, 3, 4, 5, 6, ...]
var squares = lazyArray.map(x => x * x)(integers) // [1, 4, 9, 16, 25, 36, ...]

const f = lazyArray.get(squares)
console.log(f(0), f(1), f(2)) // 1, 4, 9
```
