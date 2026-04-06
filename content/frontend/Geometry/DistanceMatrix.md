---
title: DistanceMatrix
---

`DistanceMatrix[{u1, u2, ...}]` gives the matrix of distances between each pair of elements ui, uj.

`DistanceMatrix[{u1, u2, ...}, {v1, v2, ...}]` gives the matrix of distances between each ui and vj.

## Examples

Distance matrix for points:

```wolfram
DistanceMatrix[{{0, 0}, {1, 0}, {0, 1}}]
(* {{0, 1, 1}, {1, 0, Sqrt[2]}, {1, Sqrt[2], 0}} *)
```

Between two sets:

```wolfram
DistanceMatrix[{{0, 0}}, {{1, 0}, {0, 1}}]
(* {{1, 1}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DistanceMatrix.html) for more details.