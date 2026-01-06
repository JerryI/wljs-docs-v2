---
title: GraphCenter
---

`GraphCenter[g]` gives the set of vertices with minimum eccentricity (most central vertices) in graph g.

## Examples

Center of a path:

```wolfram
GraphCenter[PathGraph[Range[5]]]
(* {3} - middle vertex *)
```

Center of a cycle:

```wolfram
GraphCenter[CycleGraph[6]]
(* {1, 2, 3, 4, 5, 6} - all vertices *)
```

Center of a grid:

```wolfram
GraphCenter[GridGraph[{3, 3}]]
(* {5} - center of 3x3 grid *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphCenter.html) for more details.*