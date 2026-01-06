# WeightedAdjacencyGraph

`WeightedAdjacencyGraph[wmat]` gives the graph with weighted adjacency matrix wmat.

- `WeightedAdjacencyGraph[{v1, v2, ...}, wmat]` gives the graph with vertices vi and weighted adjacency matrix wmat.

## Examples

Create a weighted graph from a matrix:
```wolfram
WeightedAdjacencyGraph[{{0, 1, 2}, {1, 0, 3}, {2, 3, 0}}]
```

With named vertices:
```wolfram
WeightedAdjacencyGraph[{"A", "B", "C"}, {{0, 5, 0}, {5, 0, 3}, {0, 3, 0}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeightedAdjacencyGraph.html) for more details.*