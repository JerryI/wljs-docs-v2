---
title: NProduct
---

`NProduct[f, {i, imin, imax}]` gives a numerical approximation to the product.

`NProduct[f, {i, imin, imax, di}]` uses a step di in the product.

## Examples

Numerical product:

```wolfram
NProduct[1 + 1/n^2, {n, 1, Infinity}]
(* 3.67608 *)
```

Finite product:

```wolfram
NProduct[n, {n, 1, 10}]
(* 3.6288*10^6 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NProduct.html) for more details.