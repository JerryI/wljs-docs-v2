---
title: UnilateralConvolve
---

`UnilateralConvolve[f, g, u, t]` gives the unilateral convolution with respect to u of the expressions f and g.

`UnilateralConvolve[f, g, {u1, ..., un}, {t1, ..., tn}]` gives the multidimensional unilateral convolution.

## Examples

Convolve two functions:

```wolfram
UnilateralConvolve[Exp[-a u], Exp[-b u], u, t]
(* (E^(-b t) - E^(-a t))/(a - b) *)
```

Convolve with unit step:

```wolfram
UnilateralConvolve[1, Sin[u], u, t]
(* 1 - Cos[t] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnilateralConvolve.html) for more details.*