---
title: RequiredPhysicalQuantities
---

`RequiredPhysicalQuantities` is an option for FormulaLookup that specifies physical quantities that must be used by the formulas returned.

## Examples

Find formulas involving specific quantities:

```wolfram
FormulaLookup["kinetic energy", 
  RequiredPhysicalQuantities -> {"Mass", "Speed"}]
```

Require multiple quantities:

```wolfram
FormulaLookup["force", 
  RequiredPhysicalQuantities -> {"Acceleration", "Mass"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RequiredPhysicalQuantities.html) for more details.*