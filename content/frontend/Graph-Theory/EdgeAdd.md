---
title: EdgeAdd
---

`EdgeAdd[g, e]` makes a graph by adding the edge e to the graph g.

`EdgeAdd[g, {e1, e2, ...}]` adds a collection of edges to g.

## Examples

Add an edge to a graph:

```wolfram
EdgeAdd[Graph[{1 -> 2}], 2 -> 3]
```

Add multiple edges:

```wolfram
EdgeAdd[CycleGraph[4], {1 -> 3, 2 -> 4}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeAdd.html) for more details.