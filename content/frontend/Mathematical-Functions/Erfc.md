---
title: Erfc
---

`Erfc[z]` gives the complementary error function erfc(z) = 1 - erf(z).

## Examples

Complementary error function:

```wolfram
Erfc[0]
(* 1 *)

Erfc[Infinity]
(* 0 *)
```

Numerical evaluation:

```wolfram
N[Erfc[1]]
(* 0.157299 *)
```

Relation to Erf:

```wolfram
Erfc[x] + Erf[x] == 1
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Erfc.html) for more details.