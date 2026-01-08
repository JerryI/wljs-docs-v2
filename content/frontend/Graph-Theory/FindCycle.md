---
title: FindCycle
---

`FindCycle[g]` finds a cycle in graph g. `FindCycle[g, k, n]` finds up to n cycles of length at most k.

## Examples

Find a cycle:

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 3 -> 1}]
FindCycle[g]
(* {{1 -> 2, 2 -> 3, 3 -> 1}} *)
```

Find triangles:

```wolfram
FindCycle[CompleteGraph[5], {3}, All]
(* All 3-cycles in K5 *)
```

No cycles in a tree:

```wolfram
FindCycle[TreeGraph[{1 -> 2, 1 -> 3}]]
(* {} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindCycle.html) for more details.