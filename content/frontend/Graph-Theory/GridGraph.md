---
title: GridGraph
---

`GridGraph[{m, n}]` gives the m×n grid graph. `GridGraph[{n1, n2, ..., nk}]` gives a k-dimensional grid graph.

## Examples

Create 2D grid:

```wolfram
GridGraph[{4, 5}]
(* 4x5 grid with 20 vertices *)
```

3D grid:

```wolfram
GridGraph[{3, 3, 3}]
(* 27 vertices *)
```

Vertex and edge counts:

```wolfram
{VertexCount[GridGraph[{3, 4}]], EdgeCount[GridGraph[{3, 4}]]}
(* {12, 17} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GridGraph.html) for more details.