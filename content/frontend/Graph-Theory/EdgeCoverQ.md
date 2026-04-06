---
title: EdgeCoverQ
---

`EdgeCoverQ[g, elist]` yields `True` if the edge list elist is an edge cover of the graph g and `False` otherwise.

## Examples

Check if edges cover all vertices:

```wolfram
EdgeCoverQ[CycleGraph[4], {1 <-> 2, 3 <-> 4}]
(* True *)
```

Incomplete cover:

```wolfram
EdgeCoverQ[PathGraph[Range[5]], {1 <-> 2}]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeCoverQ.html) for more details.