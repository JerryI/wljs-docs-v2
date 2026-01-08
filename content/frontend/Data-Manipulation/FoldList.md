---
title: FoldList
---

`FoldList[f, x, {a, b, ...}]` gives `{x, f[x, a], f[f[x, a], b], ...}`.

`FoldList[f, {a, b, c, ...}]` gives `{a, f[a, b], f[f[a, b], c], ...}`.

## Examples

Cumulative sums:

```wolfram
FoldList[Plus, 0, {1, 2, 3, 4}]
(* {0, 1, 3, 6, 10} *)
```

Build nested expressions:

```wolfram
FoldList[f, x, {a, b, c}]
(* {x, f[x, a], f[f[x, a], b], f[f[f[x, a], b], c]} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FoldList.html) for more details.