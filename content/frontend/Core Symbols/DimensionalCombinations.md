# DimensionalCombinations

`DimensionalCombinations[{pq1, pq2, ...}]` returns possible combinations of physical quantities that are dimensionless.

`DimensionalCombinations[{pq1, pq2, ...}, dim]` returns combinations matching dimensions of dim.

## Examples

Find dimensionless combinations:

```wolfram
DimensionalCombinations[{Quantity["Length"], Quantity["Time"], Quantity["Speed"]}]
```

Match specific dimensions:

```wolfram
DimensionalCombinations[{Quantity["Mass"], Quantity["Speed"]}, Quantity["Energy"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DimensionalCombinations.html) for more details.*