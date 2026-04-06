---
title: SimpleGraph
---

`SimpleGraph[g]` gives the underlying simple graph from the graph g.

`SimpleGraph[{v->w,…}]` uses rules v->w to specify the graph g.

## Examples

Get the simple graph from a multigraph:

```wolfram
SimpleGraph[Graph[{1 -> 2, 1 -> 2, 2 -> 3}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SimpleGraph.html) for more details.