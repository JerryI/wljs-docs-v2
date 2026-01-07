---
title: BesselY
---

`BesselY[n, z]` gives the Bessel function of the second kind Y_n(z), also called the Neumann function.

## Examples

Bessel Y function:

```wolfram
N[BesselY[0, 1]]
(* 0.0882570 *)

N[BesselY[1, 2]]
(* -0.107032 *)
```

Divergent at zero:

```wolfram
N[BesselY[0, 0.1]]
(* -1.53424 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BesselY.html) for more details.*