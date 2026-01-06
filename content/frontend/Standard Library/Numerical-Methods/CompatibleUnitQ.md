---
title: CompatibleUnitQ
---

`CompatibleUnitQ[quantity1, quantity2]` returns True if quantity1 and quantity2 have compatible units, and False otherwise.

## Examples

```wolfram
CompatibleUnitQ[Quantity[1, "Meters"], Quantity[1, "Feet"]]
(* True *)
```

```wolfram
CompatibleUnitQ[Quantity[1, "Meters"], Quantity[1, "Seconds"]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompatibleUnitQ.html) for more details.*