---
title: Chop
---

`Chop[expr]` replaces approximate real numbers in expr that are close to zero by the exact integer 0.

`Chop[expr, delta]` replaces numbers smaller in absolute magnitude than delta by 0.

## Examples

Remove small numerical noise:

```wolfram
Chop[0.00000001]
(* 0 *)
```

Chop complex numbers:

```wolfram
Chop[1.0 + 1.*^-12 I]
(* 1. *)
```

Custom tolerance:

```wolfram
Chop[0.001, 0.01]
(* 0 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Chop.html) for more details.*