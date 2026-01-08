---
title: HypergeometricU
---

`HypergeometricU[a, b, z]` is the Tricomi confluent hypergeometric function U(a, b, z).

## Examples

Compute the function:

```wolfram
HypergeometricU[1, 2, 1.0]
(* 0.596347 *)
```

Asymptotic behavior:

```wolfram
Series[HypergeometricU[a, b, z], {z, Infinity, 2}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HypergeometricU.html) for more details.