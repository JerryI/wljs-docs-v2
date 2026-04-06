---
title: AdjacencyMatrix
---

`AdjacencyMatrix[g]` gives the adjacency matrix of graph `g`, where entry $(i,j)$ is 1 if vertices $i$ and $j$ are connected.

## Examples

Get adjacency matrix:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 1}]

AdjacencyMatrix[g] // MatrixForm
(*
  0 1 1
  1 0 1
  1 1 0
*)

AdjacencyMatrix[CompleteGraph[4]] // MatrixForm
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AdjacencyMatrix.html) for more details.