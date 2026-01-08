---
title: ConnectedGraphComponents
---

`ConnectedGraphComponents[g]` gives the connected components of the graph g.

`ConnectedGraphComponents[g, {v1, v2, ...}]` gives the connected components that include at least one of the vertices v1, v2, ....

`ConnectedGraphComponents[g, patt]` gives the connected components that include a vertex that matches the pattern patt.

`ConnectedGraphComponents[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Get connected components as subgraphs:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 4 <-> 5}];
ConnectedGraphComponents[g]
```

Components containing specific vertices:

```wolfram
ConnectedGraphComponents[g, {1}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConnectedGraphComponents.html) for more details.