---
title: UnitDimensions
---

`UnitDimensions[unit]` returns a list of base dimensions associated with the specified unit.

- `UnitDimensions[quantity]` returns a list of base dimensions associated with the unit of the specified quantity.

## Examples

Dimensions of meters:

```wolfram
UnitDimensions["Meters"]
(* {{"LengthUnit", 1}} *)
```

Velocity dimensions:

```wolfram
UnitDimensions["Meters/Seconds"]
(* {{"LengthUnit", 1}, {"TimeUnit", -1}} *)
```

From a quantity:

```wolfram
UnitDimensions[Quantity[5, "Newtons"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnitDimensions.html) for more details.