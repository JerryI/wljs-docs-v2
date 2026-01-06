---
title: FetalGrowthData
---

`FetalGrowthData[age]` returns the values for all properties of fetal development for the specified age of the fetus.

`FetalGrowthData[age, property]` returns the value for a property of fetal development for the specified age.

`FetalGrowthData[age, index]` returns the values for all properties of fetal development at the specified age and percentile.

`FetalGrowthData[age, property, index]` returns the value for a property at the specified age and percentile.

## Examples

Get fetal weight at 20 weeks:

```wolfram
FetalGrowthData[Quantity[20, "Weeks"], "Weight"]
(* Quantity[300, "Grams"] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FetalGrowthData.html) for more details.*