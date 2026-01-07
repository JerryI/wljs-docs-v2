---
title: UnityDimensions
---

`UnityDimensions` is an option for `UnitSimplify` that specifies which `UnitDimensions` should be factored out.

This option controls how dimensionless quantities are handled during unit simplification.

## Examples

```wolfram
UnitSimplify[Quantity[100, "Centimeters"/"Meters"]]
```

```wolfram
UnitSimplify[Quantity[1, "Radians"], UnityDimensions -> {"AngleUnit"}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnityDimensions.html) for more details.*