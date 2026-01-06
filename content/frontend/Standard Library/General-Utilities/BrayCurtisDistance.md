---
title: BrayCurtisDistance
---

`BrayCurtisDistance[u, v]` gives the Bray–Curtis distance between vectors u and v.

## Examples

Calculate Bray-Curtis distance:

```wolfram
BrayCurtisDistance[{1, 2, 3}, {4, 5, 6}]
(* 3/7 *)
```

Identical vectors have zero distance:

```wolfram
BrayCurtisDistance[{1, 2, 3}, {1, 2, 3}]
(* 0 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BrayCurtisDistance.html) for more details.*