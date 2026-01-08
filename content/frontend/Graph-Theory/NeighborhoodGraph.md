---
title: NeighborhoodGraph
---

`NeighborhoodGraph[g, v]` gives the graph neighborhood of a vertex v in the graph g.

`NeighborhoodGraph[g, v, d]` gives the neighborhood up to distance d.

## Examples

Neighborhood of a vertex:

```wolfram
NeighborhoodGraph[GridGraph[{5, 5}], 13]
```

Up to distance 2:

```wolfram
NeighborhoodGraph[GridGraph[{5, 5}], 13, 2]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NeighborhoodGraph.html) for more details.