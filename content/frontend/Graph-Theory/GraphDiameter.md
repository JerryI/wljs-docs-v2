---
title: GraphDiameter
---

`GraphDiameter[g]` gives the greatest distance between any pair of vertices in graph g.

## Examples

Diameter of a path:

```wolfram
GraphDiameter[PathGraph[Range[10]]]
(* 9 *)
```

Diameter of a complete graph:

```wolfram
GraphDiameter[CompleteGraph[10]]
(* 1 - every vertex connects directly *)
```

Diameter of a grid:

```wolfram
GraphDiameter[GridGraph[{5, 5}]]
(* 8 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphDiameter.html) for more details.