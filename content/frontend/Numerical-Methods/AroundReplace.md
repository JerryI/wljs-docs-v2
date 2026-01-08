---
title: AroundReplace
---

`AroundReplace[expr, {s1 -> Around[x1, δ1], s2 -> Around[x2, δ2], ...}]` propagates uncertainty in expr by replacing all occurrences of si by `Around[xi, δi]`.

`AroundReplace[expr, rules, n]` propagates uncertainty in expr using a series expansion to order n.

## Examples

Propagate uncertainty through an expression:

```wolfram
AroundReplace[x + y, {x -> Around[10, 1], y -> Around[5, 0.5]}]
(* Around[15, 1.12] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AroundReplace.html) for more details.