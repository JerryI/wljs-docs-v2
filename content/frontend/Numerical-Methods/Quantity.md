---
title: Quantity
---

`Quantity[magnitude, unit]` represents a physical quantity with a numerical value and unit. Quantities support automatic unit handling in calculations.

## Examples

Create and work with quantities:

```wolfram
Quantity[5, "Meters"]

(* Arithmetic with units *)
Quantity[100, "Kilometers"] / Quantity[2, "Hours"]
(* Quantity[50, "Kilometers"/"Hours"] *)

(* Mixed units work automatically *)
Quantity[1, "Meters"] + Quantity[50, "Centimeters"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Quantity.html) for more details.