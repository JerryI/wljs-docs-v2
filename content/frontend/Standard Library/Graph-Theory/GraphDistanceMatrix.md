# GraphDistanceMatrix

`GraphDistanceMatrix[g]` gives the matrix of shortest path distances between all pairs of vertices.

## Examples

Distance matrix of a path:

```wolfram
GraphDistanceMatrix[PathGraph[{1, 2, 3, 4}]]
(* {{0, 1, 2, 3}, {1, 0, 1, 2}, {2, 1, 0, 1}, {3, 2, 1, 0}} *)
```

For a complete graph:

```wolfram
GraphDistanceMatrix[CompleteGraph[4]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphDistanceMatrix.html) for more details.*