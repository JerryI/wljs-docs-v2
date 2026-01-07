---
title: ArrayReduce
---

`ArrayReduce[f, array, n]` reduces dimension n of array by applying f.

`ArrayReduce[f, array, n1;;n2]` reduces dimensions n1 through n2.

`ArrayReduce[f, array, {n1, n2, ...}]` reduces dimensions n1, n2, etc.

## Examples

Sum over the first dimension:

```wolfram
ArrayReduce[Total, {{1, 2}, {3, 4}}, 1]
(* {4, 6} *)
```

Reduce multiple dimensions:

```wolfram
ArrayReduce[Max, RandomReal[1, {3, 4, 5}], {1, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayReduce.html) for more details.*