---
title: UnitConvert
---

`UnitConvert[quantity, targetunit]` converts a quantity to the target unit. `UnitConvert[quantity]` converts to SI base units.

## Examples

Convert between units:

```wolfram
UnitConvert[Quantity[1, "Miles"], "Kilometers"]
(* Quantity[1.60934, "Kilometers"] *)

UnitConvert[Quantity[100, "Celsius"], "Fahrenheit"]
(* Quantity[212, "DegreesFahrenheit"] *)

(* To SI base units *)
UnitConvert[Quantity[1, "Horsepower"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnitConvert.html) for more details.