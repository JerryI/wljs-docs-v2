---
title: Erf
---

`Erf[z]` gives the error function erf(z), related to the normal distribution. `Erf[z0, z1]` gives erf(z1) - erf(z0).

## Examples

Error function values:

```wolfram
Erf[0]
(* 0 *)

Erf[Infinity]
(* 1 *)
```

Numerical evaluation:

```wolfram
N[Erf[1]]
(* 0.842701 *)
```

Generalized form:

```wolfram
Erf[0, 2] // N
(* 0.995322 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Erf.html) for more details.*