---
title: UnitSimplify
---

`UnitSimplify[quantity]` simplifies the units of a quantity to a standard form.

## Examples

Simplify unit expressions:

```wolfram
UnitSimplify[Quantity[1, "Joules"/"Seconds"]]
(* Quantity[1, "Watts"] *)

UnitSimplify[Quantity[1, "Kilograms" "Meters"/"Seconds"^2]]
(* Quantity[1, "Newtons"] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnitSimplify.html) for more details.