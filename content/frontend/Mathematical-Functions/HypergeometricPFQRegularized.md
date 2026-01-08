---
title: HypergeometricPFQRegularized
---

`HypergeometricPFQRegularized[{a1,…,ap},{b1,…,bq},z]` is the regularized generalized hypergeometric function pFq(a;b;z)/(Γ(b1)…Γ(bq)).

## Examples

Evaluate a regularized hypergeometric function:

```wolfram
HypergeometricPFQRegularized[{1, 2}, {3}, 0.5]
```

Compare with the non-regularized form:

```wolfram
HypergeometricPFQ[{1, 2}, {3}, 0.5] / Gamma[3]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HypergeometricPFQRegularized.html) for more details.