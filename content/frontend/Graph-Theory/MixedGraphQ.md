---
title: MixedGraphQ
---

`MixedGraphQ[g]` yields True if the graph g is a mixed graph and False otherwise.

## Examples

Test a mixed graph with both directed and undirected edges:

```wolfram
g = Graph[{1 <-> 2, 2 -> 3}];
MixedGraphQ[g]
(* True *)
```

Test a purely undirected graph:

```wolfram
MixedGraphQ[CompleteGraph[4]]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MixedGraphQ.html) for more details.