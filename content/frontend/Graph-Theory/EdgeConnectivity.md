---
title: EdgeConnectivity
---

`EdgeConnectivity[g]` gives the edge connectivity of the graph g.

`EdgeConnectivity[g, s, t]` gives the s-t edge connectivity of the graph g.

## Examples

Edge connectivity of a graph:

```wolfram
EdgeConnectivity[CompleteGraph[5]]
(* 4 *)
```

Between specific vertices:

```wolfram
EdgeConnectivity[GridGraph[{3, 3}], 1, 9]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeConnectivity.html) for more details.