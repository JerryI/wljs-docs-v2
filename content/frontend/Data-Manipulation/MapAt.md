---
title: MapAt
---

`MapAt[f, expr, n]` applies f to the element at position n in expr.

`MapAt[f, expr, {i, j, ...}]` applies f to the part at a nested position.

`MapAt[f, expr, {{i1}, {i2}, ...}]` applies f at multiple positions.

## Examples

Apply a function at a specific position:

```wolfram
MapAt[f, {a, b, c, d}, 2]
(* {a, f[b], c, d} *)
```

Apply at multiple positions:

```wolfram
MapAt[f, {a, b, c, d}, {{1}, {3}}]
(* {f[a], b, f[c], d} *)
```

Square a specific element:

```wolfram
MapAt[#^2 &, {1, 2, 3, 4}, 2]
(* {1, 4, 3, 4} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MapAt.html) for more details.