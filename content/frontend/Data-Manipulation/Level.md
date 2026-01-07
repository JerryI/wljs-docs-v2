---
title: Level
---

`Level[expr, levelspec]` gives a list of all subexpressions of expr on the specified levels.

## Examples

Get elements at level 1:

```wolfram
Level[f[g[a, b], h[c]], {1}]
(* {g[a, b], h[c]} *)
```

All levels:

```wolfram
Level[{{1, 2}, {3, 4}}, {-1}]
(* {1, 2, 3, 4} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Level.html) for more details.*