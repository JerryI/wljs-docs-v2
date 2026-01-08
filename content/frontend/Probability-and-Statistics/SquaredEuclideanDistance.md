---
title: SquaredEuclideanDistance
---

`SquaredEuclideanDistance[u, v]` gives the squared Euclidean distance between vectors u and v.

This is equivalent to `EuclideanDistance[u, v]^2` but more efficient.

## Examples

```wolfram
SquaredEuclideanDistance[{1, 2, 3}, {4, 5, 6}]
```

```wolfram
SquaredEuclideanDistance[{0, 0}, {3, 4}]
```

```wolfram
DistanceMatrix[data, DistanceFunction -> SquaredEuclideanDistance]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SquaredEuclideanDistance.html) for more details.*