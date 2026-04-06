---
title: EdgeQ
---

`EdgeQ[g, e]` yields `True` if e is an edge in the graph g and `False` otherwise.

## Examples

Check if edge exists:

```wolfram
g = Graph[{1 -> 2, 2 -> 3}];
EdgeQ[g, 1 -> 2]
(* True *)
```

```wolfram
EdgeQ[g, 1 -> 3]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeQ.html) for more details.