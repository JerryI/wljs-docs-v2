---
title: PlanarGraph
---

`PlanarGraph[{e1, e2, ...}]` yields a planar graph with edges ej.

- `PlanarGraph[{v1, v2, ...}, {e1, e2, ...}]` yields a planar graph with vertices vi and edges ej.
- `PlanarGraph[{..., wi[vi], ...}, {..., wj[ej], ...}]` yields a planar graph with vertex and edge properties defined by the symbolic wrappers wk.
- `PlanarGraph[{vi -> vj, ...}]` uses rules vi -> vj to specify a planar graph.

## Examples

```wolfram
PlanarGraph[{1 <-> 2, 2 <-> 3, 3 <-> 1}]
```

```wolfram
PlanarGraph[{1 -> 2, 2 -> 3, 3 -> 4, 4 -> 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlanarGraph.html) for more details.*