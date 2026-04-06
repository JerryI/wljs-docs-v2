---
title: AcyclicGraphQ
---

`AcyclicGraphQ[g]` yields `True` if graph g has no cycles and `False` otherwise.

## Examples

Test for cycles:

```wolfram
AcyclicGraphQ[TreeGraph[{1 -> 2, 1 -> 3}]]
(* True *)

AcyclicGraphQ[CycleGraph[5]]
(* False *)
```

Path is acyclic:

```wolfram
AcyclicGraphQ[PathGraph[Range[5]]]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AcyclicGraphQ.html) for more details.