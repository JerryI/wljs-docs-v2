---
title: NSum
---

`NSum[f, {i, imin, imax}]` gives a numerical approximation to the sum.

`NSum[f, {i, imin, imax, di}]` uses a step di in the sum.

## Examples

Numerical sum:

```wolfram
NSum[1/n^2, {n, 1, Infinity}]
(* 1.64493 *)
```

Finite sum:

```wolfram
NSum[n, {n, 1, 100}]
(* 5050. *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NSum.html) for more details.*