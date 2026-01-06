---
title: MeshConnectivityGraph
---

`MeshConnectivityGraph[mr, 0]` gives a graph of points connected by lines.

- `MeshConnectivityGraph[mr, d]` gives a graph between cells of dimension d that share a cell of dimension d-1.
- `MeshConnectivityGraph[mr, {d, e}, r]` gives a graph from cells of dimension d to cells of dimension e that share a cell of dimension r.

## Examples

Graph of mesh vertices:

```wolfram
mesh = DiscretizeRegion[Disk[]];
MeshConnectivityGraph[mesh, 0]
```

Face connectivity:

```wolfram
MeshConnectivityGraph[mesh, 2]
```

Edge-to-vertex connectivity:

```wolfram
MeshConnectivityGraph[mesh, {1, 0}, 0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeshConnectivityGraph.html) for more details.*