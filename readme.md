# lazy-array

A lazy array, which has fast random access. Consider for example a list component showing a million items with the scroll position set to display 40 items starting from item 200,000. There is no need to populate the array up to item 200,000, or after 200,040. Here the lazy array helps.

## Usage

```javascript
const LazyArray = require("lazy-array")

var integers = LazyArray.create(i => i + 1) // [1, 2, 3, 4, ...]
var twice = LazyArray.map(x => x + x)(integers) // [2, 4, 6, ...]

const f = LazyArray.get(twice)
console.log(f(1000), f(1001), f(1002)) // 2002, 2004, 2006
```
