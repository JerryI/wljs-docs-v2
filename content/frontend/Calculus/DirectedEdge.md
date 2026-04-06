---
title: DirectedEdge
---

`DirectedEdge[u, v]` or `u -> v` represents a directed edge from u to v.

## Examples

Create directed edges:

```wolfram
DirectedEdge[1, 2]
(* 1 \[DirectedEdge] 2 *)
```

Build a directed graph:

```wolfram
Graph[{DirectedEdge[1, 2], DirectedEdge[2, 3]}]
(* same as Graph[{1 -> 2, 2 -> 3}] *)
```

With tags:

```wolfram
DirectedEdge["A", "B", "route1"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirectedEdge.html) for more details.