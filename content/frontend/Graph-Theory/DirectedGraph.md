---
title: DirectedGraph
---

`DirectedGraph[g]` gives a directed graph from the undirected graph g.

`DirectedGraph[g, conv]` gives a directed graph using the conversion conv.

## Examples

Convert undirected to directed:

```wolfram
DirectedGraph[Graph[{1 <-> 2, 2 <-> 3}]]
```

With specific conversion:

```wolfram
DirectedGraph[CycleGraph[4], "Acyclic"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirectedGraph.html) for more details.