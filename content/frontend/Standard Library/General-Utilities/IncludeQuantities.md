---
title: IncludeQuantities
---

`IncludeQuantities` is an option for `DimensionalCombinations` for additional quantities to include in the result.

## Examples

```wolfram
DimensionalCombinations[{Quantity[1, "Meters"], Quantity[1, "Seconds"]}, IncludeQuantities -> {"Speed"}]
```

```wolfram
DimensionalCombinations[quantities, IncludeQuantities -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncludeQuantities.html) for more details.*