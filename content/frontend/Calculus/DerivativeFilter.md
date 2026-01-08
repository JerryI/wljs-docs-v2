---
title: DerivativeFilter
---

`DerivativeFilter[data, {n1, n2, ...}]` computes the nith derivative of data at level i.

`DerivativeFilter[data, {n1, n2, ...}, σ]` computes the derivative at a Gaussian scale of standard deviation σ.

`DerivativeFilter[data, {der1, der2, ...}, ...]` computes several derivatives der1, der2, ....

## Examples

Compute derivative of an image:

```wolfram
DerivativeFilter[image, {1, 0}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DerivativeFilter.html) for more details.