---
title: WeightedAdjacencyMatrix
---

`WeightedAdjacencyMatrix[g]` gives the adjacency matrix of edge weights of the graph g.

`WeightedAdjacencyMatrix[{v -> w, ...}]` uses rules to specify the graph g.

## Examples

Get the weighted adjacency matrix of a graph:

```wolfram
g = Graph[{1 -> 2, 2 -> 3}, EdgeWeight -> {2, 3}];
WeightedAdjacencyMatrix[g] // MatrixForm
```

Create from explicit edges:

```wolfram
WeightedAdjacencyMatrix[{1 <-> 2, 2 <-> 3, 3 <-> 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeightedAdjacencyMatrix.html) for more details.*