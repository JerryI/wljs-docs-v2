---
title: InverseMellinTransform
---

`InverseMellinTransform[expr, s, x]` gives the inverse Mellin transform of expr.

## Examples

Inverse Mellin transform of Gamma:

```wolfram
InverseMellinTransform[Gamma[s], s, x]
(* Exp[-x] *)
```

Round-trip verification:

```wolfram
f = Exp[-x];
InverseMellinTransform[MellinTransform[f, x, s], s, x]
```

Transform of a product:

```wolfram
InverseMellinTransform[Gamma[s] Gamma[1 - s], s, x]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseMellinTransform.html) for more details.