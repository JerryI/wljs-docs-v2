---
title: MapApply
---

`f @@@ expr` or `MapApply[f, expr]` replaces heads at level 1 of expr by f.

`MapApply[f]` represents an operator form of `MapApply` that can be applied to an expression.

## Examples

Apply to sublists:

```wolfram
MapApply[f, {{a, b}, {c, d}}]
(* {f[a, b], f[c, d]} *)
```

Using shorthand:

```wolfram
Plus @@@ {{1, 2}, {3, 4, 5}}
(* {3, 12} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MapApply.html) for more details.*