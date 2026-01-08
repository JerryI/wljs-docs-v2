---
title: MapIndexed
---

`MapIndexed[f, expr]` applies f to the elements of expr, providing the position as a second argument.

`MapIndexed[f, expr, levelspec]` applies f to parts at specified levels.

## Examples

Map with position information:

```wolfram
MapIndexed[f, {a, b, c}]
(* {f[a, {1}], f[b, {2}], f[c, {3}]} *)
```

Use position to label elements:

```wolfram
MapIndexed[{#2[[1]], #1} &, {a, b, c}]
(* {{1, a}, {2, b}, {3, c}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MapIndexed.html) for more details.