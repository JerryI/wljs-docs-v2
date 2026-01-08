---
title: WeaklyConnectedGraphComponents
---

`WeaklyConnectedGraphComponents[g]` gives the weakly connected components of the graph g.

- `WeaklyConnectedGraphComponents[g, {v1, v2, ...}]` gives the weakly connected components that include at least one of the vertices v1, v2, ....
- `WeaklyConnectedGraphComponents[g, patt]` gives the connected components that include a vertex that matches the pattern patt.
- `WeaklyConnectedGraphComponents[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Find weakly connected components:
```wolfram
WeaklyConnectedGraphComponents[Graph[{1 -> 2, 3 -> 4}]]
```

Components containing specific vertex:
```wolfram
WeaklyConnectedGraphComponents[graph, {1}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeaklyConnectedGraphComponents.html) for more details.