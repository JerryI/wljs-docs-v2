---
title: PlanarGraphQ
---

`PlanarGraphQ[g]` yields `True` if graph g can be drawn in a plane without edge crossings, and `False` otherwise.

## Examples

Test for planarity:

```wolfram
PlanarGraphQ[CompleteGraph[4]]
(* True - K4 is planar *)

PlanarGraphQ[CompleteGraph[5]]
(* False - K5 is not planar *)
```

Grid graphs are planar:

```wolfram
PlanarGraphQ[GridGraph[{10, 10}]]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlanarGraphQ.html) for more details.