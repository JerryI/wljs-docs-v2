---
title: FormulaData
---

`FormulaData[name]` gives the equations for the formula name.

- `FormulaData[name, {var1 -> quantity1, var2 -> quantity2, ...}]` solves or simplifies equations using the specified values.
- `FormulaData[name, "property"]` gives the value of the specified property for the formula.

## Examples

Get the ideal gas law formula:

```wolfram
FormulaData["IdealGasLaw"]
```

Solve for pressure with given values:

```wolfram
FormulaData["IdealGasLaw", {"n" -> Quantity[1, "Moles"], 
  "T" -> Quantity[300, "Kelvins"], "V" -> Quantity[1, "Liters"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FormulaData.html) for more details.*