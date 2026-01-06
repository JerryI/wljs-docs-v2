---
title: ExcludedPhysicalQuantities
---

`ExcludedPhysicalQuantities` is an option for `FormulaLookup` that specifies physical quantities that should be not used by the formulas returned.

## Examples

Exclude specific quantities:

```wolfram
FormulaLookup["kinetic energy", ExcludedPhysicalQuantities -> {"Mass"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExcludedPhysicalQuantities.html) for more details.*