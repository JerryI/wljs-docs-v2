---
title: Apply
---

`f @@ expr` or `Apply[f, expr]` replaces the head of expr by f.

`f @@@ expr` or `Apply[f, expr, {1}]` replaces heads at level 1 of expr by f.

`Apply[f, expr, levelspec]` replaces heads in parts of expr specified by levelspec.

`Apply[f]` represents an operator form of Apply that can be applied to an expression.

## Examples

Apply Plus to sum a list:

```wolfram
Plus @@ {1, 2, 3, 4}
(* 10 *)
```

Apply at level 1:

```wolfram
f @@@ {{a, b}, {c, d}}
(* {f[a, b], f[c, d]} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Apply.html) for more details.