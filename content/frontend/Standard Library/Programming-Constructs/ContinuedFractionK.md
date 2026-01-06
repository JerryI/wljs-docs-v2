---
title: ContinuedFractionK
---

`ContinuedFractionK[f, g, {i, imin, imax}]` represents the continued fraction with numerators f and denominators g.

`ContinuedFractionK[g, {i, imin, imax}]` represents the continued fraction with numerators 1 and denominators g.

## Examples

Simple continued fraction:

```wolfram
ContinuedFractionK[1, i, {i, 1, 5}]
```

With variable numerators:

```wolfram
ContinuedFractionK[i, i + 1, {i, 1, 4}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContinuedFractionK.html) for more details.*