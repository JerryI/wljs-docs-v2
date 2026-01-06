---
title: LayeredGraph3D
---

`LayeredGraph3D[g]` creates a graph with vertices and edges from the graph `g` represented as a 3D layered plot.

- `LayeredGraph3D[{e1, e2, …}]` creates a graph with edges `ej` represented as a 3D layered plot.
- `LayeredGraph3D[{…, w[ei], …}]` creates a graph with edges `ei` with features defined by the symbolic wrapper `w`.
- `LayeredGraph3D[…, v -> pos]` places the dominant vertex `v` in the plot at position `pos`.

## Examples

```wolfram
LayeredGraph3D[CompleteGraph[5]]
```

```wolfram
LayeredGraph3D[{1 -> 2, 2 -> 3, 3 -> 4, 4 -> 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LayeredGraph3D.html) for more details.*