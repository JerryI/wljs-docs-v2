---
title: DistanceFunction
---

`DistanceFunction` is an option for functions such as `Nearest` that specifies the distance value to assume between any two specified points.

## Examples

Use Euclidean distance:

```wolfram
Nearest[{{0, 0}, {1, 1}, {2, 2}}, {0.5, 0.5}, DistanceFunction -> EuclideanDistance]
```

Custom distance function:

```wolfram
Nearest[{1, 2, 3, 4, 5}, 3.2, DistanceFunction -> (Abs[#1 - #2] &)]
(* {3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DistanceFunction.html) for more details.*