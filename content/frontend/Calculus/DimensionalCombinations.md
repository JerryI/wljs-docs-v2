---
title: DimensionalCombinations
---

`DimensionalCombinations[{pq1, pq2, ...}]` returns possible combinations of physical quantities that are dimensionless.

`DimensionalCombinations[{pq1, pq2, ...}, dim]` returns combinations matching dimensions of dim.

## Examples

Find dimensionless combinations:

```wolfram
DimensionalCombinations[{QuantityVariable["l", "Length"], QuantityVariable["t", "Time"], QuantityVariable["v", "Speed"]}]
```

Match specific dimensions:

```wolfram
DimensionalCombinations[{QuantityVariable["m", "Mass"], QuantityVariable["v", "Speed"]}, QuantityVariable["e", "Energy"]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DimensionalCombinations.html) for more details.
