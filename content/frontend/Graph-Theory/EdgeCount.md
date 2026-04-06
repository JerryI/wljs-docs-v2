---
title: EdgeCount
---

`EdgeCount[g]` gives the number of edges in graph g. `EdgeCount[g, patt]` counts edges matching the pattern.

## Examples

Count edges:

```wolfram
EdgeCount[CompleteGraph[5]]
(* 10 - n*(n-1)/2 for complete graph *)

EdgeCount[CycleGraph[10]]
(* 10 *)
```

Edge count in grid:

```wolfram
EdgeCount[GridGraph[{3, 3}]]
(* 12 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeCount.html) for more details.