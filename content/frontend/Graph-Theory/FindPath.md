---
title: FindPath
---

`FindPath[g, s, t]` finds a path between vertices s and t in graph g. `FindPath[g, s, t, k, n]` finds up to n paths of length at most k.

## Examples

Find any path:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 1 <-> 3}]
FindPath[g, 1, 3]
(* {{1, 3}} *)
```

Find multiple paths:

```wolfram
FindPath[g, 1, 3, Infinity, All]
(* {{1, 3}, {1, 2, 3}} *)
```

Paths of specific length:

```wolfram
FindPath[g, 1, 3, {2}]
(* {{1, 2, 3}} - length exactly 2 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindPath.html) for more details.