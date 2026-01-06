---
title: GraphPeriphery
---

`GraphPeriphery[g]` gives vertices that are maximally distant to at least one vertex in the graph g.

`GraphPeriphery[{v -> w, ...}]` uses rules to specify the graph g.

## Examples

Find the periphery of a graph:

```wolfram
GraphPeriphery[CycleGraph[6]]
(* {1, 2, 3, 4, 5, 6} *)
```

Periphery of a path graph:

```wolfram
GraphPeriphery[PathGraph[{a, b, c, d, e}]]
(* {a, e} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphPeriphery.html) for more details.*