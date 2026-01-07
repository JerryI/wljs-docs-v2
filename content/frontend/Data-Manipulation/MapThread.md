---
title: MapThread
---

`MapThread[f, {{a1, a2, ...}, {b1, b2, ...}, ...}]` gives `{f[a1, b1, ...], f[a2, b2, ...], ...}`.

## Examples

Apply function to corresponding elements:

```wolfram
MapThread[Plus, {{1, 2, 3}, {10, 20, 30}}]
(* {11, 22, 33} *)
```

With a custom function:

```wolfram
MapThread[f, {{a, b}, {1, 2}, {x, y}}]
(* {f[a, 1, x], f[b, 2, y]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MapThread.html) for more details.*