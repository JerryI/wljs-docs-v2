---
title: BesselK
---

`BesselK[n, z]` gives the modified Bessel function of the second kind K_n(z).

## Examples

Modified Bessel K function:

```wolfram
N[BesselK[0, 1]]
(* 0.421024 *)

N[BesselK[1, 2]]
(* 0.139866 *)
```

Asymptotic behavior:

```wolfram
N[BesselK[0, 0.1]]
(* 2.42707 - large for small z *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BesselK.html) for more details.