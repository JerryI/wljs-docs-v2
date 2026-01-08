---
title: UnitStep
---

`UnitStep[x]` represents the unit step function, equal to `0` for x < 0 and `1` for x ≥ 0.

`UnitStep[x1, x2, ...]` is 1 only if none of the xi are negative.

## Examples

Evaluate the unit step:

```wolfram
UnitStep[-1]
(* 0 *)

UnitStep[0]
(* 1 *)

UnitStep[5]
(* 1 *)
```

Plot the unit step function:

```wolfram
Plot[UnitStep[x], {x, -2, 2}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnitStep.html) for more details.