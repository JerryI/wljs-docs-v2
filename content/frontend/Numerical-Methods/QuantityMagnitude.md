---
title: QuantityMagnitude
---

`QuantityMagnitude[quantity]` extracts the numerical value from a quantity. `QuantityMagnitude[quantity, unit]` gives the value in specific units.

## Examples

Extract numerical values:

```wolfram
QuantityMagnitude[Quantity[5, "Meters"]]
(* 5 *)

(* Convert and extract *)
QuantityMagnitude[Quantity[1, "Kilometers"], "Meters"]
(* 1000 *)

QuantityMagnitude[Quantity[100, "Celsius"], "Fahrenheit"]
(* 212 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuantityMagnitude.html) for more details.*