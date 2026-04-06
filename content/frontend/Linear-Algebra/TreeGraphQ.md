---
title: TreeGraphQ
---

`TreeGraphQ[g]` yields `True` if graph g is a tree (connected and acyclic) and `False` otherwise.

## Examples

Test for tree:

```wolfram
TreeGraphQ[TreeGraph[{1 -> 2, 1 -> 3, 2 -> 4}]]
(* True *)

TreeGraphQ[CycleGraph[4]]
(* False - has cycle *)

TreeGraphQ[Graph[{1 <-> 2, 3 <-> 4}]]
(* False - not connected *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeGraphQ.html) for more details.