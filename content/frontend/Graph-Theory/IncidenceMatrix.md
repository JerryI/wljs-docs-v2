---
title: IncidenceMatrix
---

`IncidenceMatrix[g]` gives the vertex-edge incidence matrix of the graph g.

- `IncidenceMatrix[{v -> w, ...}]` uses rules v -> w to specify the graph g.

## Examples

Incidence matrix of a graph:

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 3 -> 1}];
IncidenceMatrix[g]
```

From edge rules:

```wolfram
IncidenceMatrix[{a -> b, b -> c, c -> a}]
```

Undirected graph:

```wolfram
IncidenceMatrix[CycleGraph[4]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncidenceMatrix.html) for more details.