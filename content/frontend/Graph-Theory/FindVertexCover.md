---
title: FindVertexCover
---

`FindVertexCover[g]` finds a vertex cover of the graph g with a minimum number of vertices.

## Examples

Find minimum vertex cover:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4}]
FindVertexCover[g]
(* {2, 3} *)
```

For a complete graph:

```wolfram
FindVertexCover[CompleteGraph[4]]
(* {1, 2, 3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindVertexCover.html) for more details.