---
title: EdgeRules
---

`EdgeRules[g]` gives the list of edge rules for the graph g.

## Examples

Get edge rules:

```wolfram
EdgeRules[Graph[{1 <-> 2, 2 <-> 3}]]
(* {1 -> 2, 2 -> 3} *)
```

For a directed graph:

```wolfram
EdgeRules[Graph[{1 -> 2, 2 -> 3}]]
(* {1 -> 2, 2 -> 3} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeRules.html) for more details.