---
title: Gamma
---

`Gamma[z]` is the Euler gamma function Γ(z). `Gamma[a, z]` is the incomplete gamma function.

## Examples

Gamma function values:

```wolfram
Gamma[5]
(* 24 - equals (5-1)! = 4! *)

Gamma[1/2]
(* Sqrt[Pi] *)
```

Numerical evaluation:

```wolfram
N[Gamma[3.5]]
(* 3.32335 *)
```

Incomplete gamma function:

```wolfram
Gamma[2, 1] // N
(* 0.735759 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Gamma.html) for more details.*