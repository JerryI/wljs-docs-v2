---
title: WeaklyConnectedComponents
---

`WeaklyConnectedComponents[g]` gives the weakly connected components of the graph g.

`WeaklyConnectedComponents[g, {v1, v2, ...}]` gives the weakly connected components that include at least one of the specified vertices.

## Examples

Find weakly connected components:

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 4 -> 5}];
WeaklyConnectedComponents[g]
(* {{1, 2, 3}, {4, 5}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeaklyConnectedComponents.html) for more details.