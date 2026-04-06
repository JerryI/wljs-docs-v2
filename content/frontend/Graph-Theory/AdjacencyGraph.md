---
title: AdjacencyGraph
---

`AdjacencyGraph[amat]` gives the graph with adjacency matrix amat.

`AdjacencyGraph[{v1, v2, ...}, amat]` gives the graph with vertices vi and adjacency matrix amat.

## Examples

Create a graph from an adjacency matrix:

```wolfram
AdjacencyGraph[{{0, 1, 1}, {1, 0, 1}, {1, 1, 0}}]
```

Create a named graph:

```wolfram
AdjacencyGraph[{a, b, c}, {{0, 1, 0}, {1, 0, 1}, {0, 1, 0}}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AdjacencyGraph.html) for more details.