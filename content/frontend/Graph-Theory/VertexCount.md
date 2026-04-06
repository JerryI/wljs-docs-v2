---
title: VertexCount
---

`VertexCount[g]` gives the number of vertices in graph g. `VertexCount[g, patt]` counts vertices matching the pattern.

## Examples

Count vertices:

```wolfram
VertexCount[CompleteGraph[10]]
(* 10 *)

VertexCount[GridGraph[{5, 5}]]
(* 25 *)
```

Count matching pattern:

```wolfram
g = Graph[{1, 2, 3, "a", "b"}, {1 <-> 2}]
VertexCount[g, _Integer]
(* 3 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexCount.html) for more details.